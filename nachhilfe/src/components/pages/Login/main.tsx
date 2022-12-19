import React, { useState } from 'react';
import { Alert, Box, Button, Center, FormControl, Heading, HStack, Input, Link, Stack, VStack } from 'native-base';
import { Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const Example = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

  const setup = async () => {
    const name = await AsyncStorage.getItem('name');
    if(name != null) {
      setCurrentUser(name)
      setIsLoggedIn(true)
    }
  }

  const url = `${APIUrl}/login`;

  const handleSubmit = async () => {
    const requestOptions = {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            userName: userName,
            password: password,
        }),
    };
    const response = await fetch(url, requestOptions)
    if(response.status == 404) {
      setIsError(true);
      setErrorMsg("Nutzer nicht gefunden.")
    }
    if(response.status == 409) {
      setIsError(true);
      setErrorMsg("Falsches Passwort.")
    }
    if(response.status == 500) {
      setIsError(true);
      setErrorMsg("Server Fehler, bitte erneut versuchen")
    }
    if(response.ok) {
      setIsLoggedIn(true);
      setIsError(false);
      setErrorMsg("");
      const data: any = await response.json();
      console.log("===================");
      console.log(data[0].id)
      setCurrentUser(data[0].userName)
      try {
        await AsyncStorage.setItem(
          'user',
          `${data[0].id}`,
        );
        console.log(data[0].id)
        await AsyncStorage.setItem(
          'name',
          `${data[0].userName}`,
        );
        console.log(data[0].userName)
      } catch (error) {
        setIsError(true);
        setErrorMsg("Server Fehler, bitte erneut versuchen")
      }
    }
  };

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Willkommen!
        </Heading>
        {isLoggedIn ? (
          <>
            <Heading mt="1"
              _dark={{color: "green.200"}}
              color="green.600"
              fontWeight="medium"
              size="xs"
            >
              Eingeloggt!
            </Heading>
          </>
        ) : (
          <>
            <Heading mt="1"
              _dark={{color: "warmGray.200"}}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Einloggen, um Inhalt nutzen zu können!
            </Heading>
          </>
        )}
        {isError ? (
          <>
            <Heading mt="1"
              _dark={{color: "red.200"}}
              color="red.600"
              fontWeight="medium"
              size="xs"
            >
              Fehler!
            </Heading>
            <Heading mt="1"
              _dark={{color: "red.200"}}
              color="red.600"
              fontWeight="medium"
              size="xs"
            >
              {errorMsg}
            </Heading>
          </>
        ) : (
          <>
          </>
        )}

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Benutzername</FormControl.Label>
            <Input 
              onChange={(e: any) => {
                setUserName(e.target.value);
                return;
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Passwort</FormControl.Label>
            <Input
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
                return;
              }}
            />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Passwort vergessen?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => {handleSubmit()}}
          >
            Einloggen
          </Button>
        </VStack>
      </Box>
    </Center>;
};