import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginDialog = (props: any) => {
    const {isOpen, close} = props
    const toast = useToast();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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

    const url = `${APIUrl}/login`;
  
    const getPoints = async (name) => {
        
        const url2 = `${APIUrl}/stats/user/${name}`;
        const requestOptions2 = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response2 = await fetch(url2, requestOptions2)
        if(response2.ok) {
          const data2: any = await response2.json();
          console.log("Stats")
          console.log(data2)
          await AsyncStorage.setItem(
            'lp',
            `${data2.learningPoints}`,
          );
          await AsyncStorage.setItem(
            'tp',
            `${data2.teachingPoints}`,
          );
          await AsyncStorage.setItem(
            'pp',
            `${data2.profilePoints}`,
          );
          await AsyncStorage.setItem(
            'mc1',
            `${data2.mc1}`,
          );
          await AsyncStorage.setItem(
            'mc2',
            `${data2.mc2}`,
          );
          await AsyncStorage.setItem(
            'mc3',
            `${data2.mc3}`,
          );
        }
    }

    const setupData = async () => {
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
            await AsyncStorage.setItem(
              'ort',
              `${data[0].street} ${data[0].houseNr} ${data[0].zipCode} ${data[0].city}`,
            );
            console.log(`${data[0].street} ${data[0].houseNr} ${data[0].zipCode} ${data[0].city}`)
          } catch (error) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
          }
          getPoints(data[0].id)
          toast.show({description: "Eingeloggt als "+data[0].userName+"!"})
        }
    };
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            {userData === undefined ? (
                <Modal.Header>Profil</Modal.Header>
            ) : (
                <Modal.Header>{userData.userName}</Modal.Header>
            )}
            <Modal.Body>
                <Center w="100%">
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Willkommen!
                        </Heading>
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
                        </VStack>
                    </Box>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    setupData()
                }}>
                    Einloggen
                </Button>
                <Button flex="1" onPress={() => {
                    close()
                }}>
                    Zurück
                </Button>
            </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}