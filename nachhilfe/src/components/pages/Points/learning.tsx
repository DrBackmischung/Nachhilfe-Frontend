import React, { useEffect, useState } from 'react';
import { Heading } from 'native-base';
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
      console.log("useEffect "+user)
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
      console.log("===================");
      setUserData(data[0]);
      console.log(data[0])
    }
  };

  return (
    <>
        <Heading>LearningPoints</Heading>
    </>
  )
};