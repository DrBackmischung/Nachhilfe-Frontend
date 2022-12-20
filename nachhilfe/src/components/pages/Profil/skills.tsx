import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Select, Spinner, Stack, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Example = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [skillData, setSkillData] = useState();
  const [skillList, setSkillList] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
  const [refetch, triggerRefetch] = useState();
  const [service, setService] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      setCurrentUser(user)
      setIsLoggedIn(true)
    });
  }, [])

  useEffect(() => {
    setupData();
  }, [currentUser])

  const url = `${APIUrl}/users/${currentUser}/skills`;
  const url2 = `${APIUrl}/skills`;

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
      setSkillData(data);
    }
  };

  const fetchSkills = async () => {
    
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    };
    const response2 = await fetch(url2, requestOptions)
    if(response2.status == 500) {
      setIsError(true);
      setErrorMsg("Server Fehler, bitte erneut versuchen")
    }
    if(response2.ok) {
      setIsLoggedIn(true);
      setIsError(false);
      setErrorMsg("");
      const data: any = await response2.json();
      setSkillList(data);
      console.log(data)
    }
  }

  return (
    <>
      {skillData === undefined ? (
        <Spinner color="blue.500" />
      ) : (skillData.length === 0 ? (
          <Heading>Keine Skills gefunden</Heading>
        ) : (
          <Heading>Skills:</Heading>
        ))
      }
      
      {skillData === undefined || skillData.length === 0 ? (<></>) :
        skillData.map((s, _i) => {
          return (
            <Heading size="sm" justifySelf="left">{s.name} ({s.level})</Heading>
          );
        })
      }

    </>
  )
};