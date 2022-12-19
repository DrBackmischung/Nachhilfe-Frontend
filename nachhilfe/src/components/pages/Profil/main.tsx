import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Center, FormControl, Heading, HStack, Input, Link, Stack, VStack } from 'native-base';
import { Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const Example = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [userData, setUserData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

  useEffect(() => {
    AsyncStorage.getItem('name').then((name) => {
      console.log("useEffect "+name)
      setCurrentUser(name)
      setIsLoggedIn(true)
    });
  }, [])

  useEffect(() => {
    console.log("==================")
    console.log(currentUser)
    setupData();
  }, [currentUser])

  const setup = async () => {
    const name = await AsyncStorage.getItem('name');
    if(name != null) {
      setCurrentUser(name)
      setIsLoggedIn(true)
    }
  }

  const url = `${APIUrl}/user/${currentUser}`;

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
      console.log("===================");
      setUserData(data);
    }
  };

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Willkommen!
        </Heading>
      </Box>
    </Center>;
};