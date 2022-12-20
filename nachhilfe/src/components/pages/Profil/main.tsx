import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, FormControl, Heading, HStack, Input, Link, Spinner, Stack, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Example = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      setCurrentUser(user)
      setIsLoggedIn(true)
    });
  }, [])

  useEffect(() => {
    setupData();
  }, [currentUser])

  const url = `${APIUrl}/users/${currentUser}`;

  const setupData = async () => {
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    };
    const response = await fetch(url, requestOptions)
    if(response.status == 404) {
      setIsError(true);
      setErrorMsg("Dein Profil wurde nicht gefunden.")
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
      setUserData(data[0]);
    }
  };

  return (
    <>
      {userData === undefined ? (
        <Heading>Profil</Heading>
      ) : (
        <Heading>Profil von {userData.userName}</Heading>
      )}
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%">
            {userData === undefined ? (
              <Spinner color="blue.500" />
            ) : (
              <>
                  <VStack justifyContent="center">
                    <Avatar
                        alignSelf="right"
                        size="lg"
                        _light={{ bg: 'blue.300' }}
                        _dark={{ bg: 'blue.400' }}
                        _text={{
                            opacity: 0,
                        }}
                    >
                      NB
                    <Avatar.Badge
                        _light={{ bg: 'green.300' }}
                        _dark={{ bg: 'green.400' }}
                        borderWidth={0}
                        boxSize={5}
                    />
                    </Avatar>
                    <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                      Vorname: {userData.firstName}
                    </Heading>
                    <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                      Nachname: {userData.lastName}
                    </Heading>
                    <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                      Adresse: {userData.street} {userData.houseNr} in {userData.zipCode} {userData.city}
                    </Heading>
                  </VStack>
                </>
            )}
        </Box>
      </Center>
    </>);
};