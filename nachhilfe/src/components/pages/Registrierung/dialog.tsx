import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const RegistrierungsDialog = (props: any) => {
    const {isOpen, close} = props
    const toast = useToast();
    const [userName, setUserName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [houseNr, setHouseNr] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

    const url = `${APIUrl}/register`;
    const url2 = `${APIUrl}/stats`;
  
    const setupData = async () => {
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userName: userName,
                lastName: lastName,
                firstName: firstName,
                gender: "",
                mail: mail,
                phone: phone,
                street: street,
                houseNr: houseNr,
                zipCode: zipCode,
                city: city,
                password: password,
                confirmPassword: password2,
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
          setIsError(false);
          setErrorMsg("");
          const data: any = await response.json();
          try {
            const requestOptionsStats = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    userId: data[0].id,
                    registerDate: "",
                    learningPoints: 0,
                    teachingPoints: 0,
                    profilePoints: 0,
                    mc1: 0,
                    mc2: 0,
                    mc3: 0
                }),
            };
            const stats = await fetch(url2, requestOptionsStats)
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
            await AsyncStorage.setItem(
              'lp',
              `0`,
            );
            await AsyncStorage.setItem(
              'tp',
              `0`,
            );
            await AsyncStorage.setItem(
              'pp',
              `0`,
            );
            await AsyncStorage.setItem(
              'mc1',
              `0`,
            );
            await AsyncStorage.setItem(
              'mc2',
              `0`,
            );
            await AsyncStorage.setItem(
              'mc3',
              `0`,
            );
            console.log(`${data[0].street} ${data[0].houseNr} ${data[0].zipCode} ${data[0].city}`)
            toast.show({description: "Registriert als "+data[0].userName+"!"})
          } catch (error) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
          }
          close(false)
        }
    };
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Registrieren</Modal.Header>
            <Modal.Body>
                
                <Center w="100%">
                    <Box maxW="300">
                        <Center>
                            <VStack space={2.5}>
                                <VStack>
                                    <FormControl.Label>Benutzername</FormControl.Label>
                                    <Input onChangeText={value => setUserName(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Nachname</FormControl.Label>
                                    <Input onChangeText={value => setLastName(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Vorname</FormControl.Label>
                                    <Input onChangeText={value => setFirstName(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Passwort</FormControl.Label>
                                    <Input type='password' onChangeText={value => setPassword(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Passwort wiederholen</FormControl.Label>
                                    <Input type='password' onChangeText={value => setPassword2(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Email-Adresse</FormControl.Label>
                                    <Input onChangeText={value => setMail(value)}></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Telefonnummer</FormControl.Label>
                                    <Input onChangeText={value => setPhone(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Straße</FormControl.Label>
                                    <Input onChangeText={value => setStreet(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Hausnummer</FormControl.Label>
                                    <Input onChangeText={value => setHouseNr(value)} minWidth="200"></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Postleitzahl</FormControl.Label>
                                    <Input onChangeText={value => setZipCode(value)}></Input>
                                </VStack>
                                <VStack>
                                    <FormControl.Label>Stadt</FormControl.Label>
                                    <Input onChangeText={value => setCity(value)} minWidth="200"></Input>
                                </VStack>
                            </VStack>
                        </Center>
                    </Box>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    setupData()
                }}>
                    Registrieren
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