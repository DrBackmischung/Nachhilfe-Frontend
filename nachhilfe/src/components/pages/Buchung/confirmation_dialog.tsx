import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalButtons } from '@paypal/react-paypal-js/dist/types/components/PayPalButtons';

export const ConfirmationDialog = (props: any) => {
    const {isOpen, close, s, userId, trigger} = props
    const toast = useToast();
    const [currentUser, setCurrentUser] = useState("");
    const [userData, setUserData] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
            setupUser(user)
        });
    }, [isOpen])

    const bezahlen = async (bezahlmethode) => {

        const url = `${APIUrl}/timeslots/${s.id}`;
        
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: s.id,
                datum: s.datum,
                wochentag: s.wochentag,
                ort: s.ort,
                fach: s.fach,
                uhrzeit: s.uhrzeit,
                dauer: s.dauer,
                preis: s.preis,
                bezahlungErfolgt: bezahlmethode,
                schuelerId: currentUser,
                lehrerId: s.lehrerId,
                distanz: s.distanz
            }),
        };
        const response = await fetch(url, requestOptions)
        if(response.status !== 200) {
          setIsError(true);
          setErrorMsg("Server Fehler, bitte erneut versuchen")
          sendMail()
        }
        if(response.ok) {
          setIsError(false);
          setErrorMsg("");
          sendMail()
        }
        toast.show({description: "Termin gebucht! Die Bestätigungsmail wird verschickt."})
        trigger();
    }

    const sendMail = async () => {
        if(userData !== undefined) {
            
            const url = `${APIUrl}/billing`;
            
            const requestOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: userData.firstName,
                    mail: userData.mail,
                    address: s.ort,
                    article: s.fach,
                    price: s.preis,
                }),
            };
            const response = await fetch(url, requestOptions)
            if(response.status !== 200) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
            }
            if(response.ok) {
            setIsError(false);
            setErrorMsg("");
            }
        }
    }

  
    const setupUser = async (u: any) => {
        const url = `${APIUrl}/users/${u}`;
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
        const data: any = await response.json();
        setUserData(data[0]);
      }
    };
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="700">
            <Modal.CloseButton />
            <Modal.Header>Buchung bestätigen</Modal.Header>
            <Modal.Body>
                {s === undefined ? (<></>) : (
                    <Center w="100%">
                    <Heading size="md">Willst du die Nachhilfestunde buchen?</Heading>
                    <Box
                        _light={{
                            bg: 'primary.100',
                        }}
                        _dark={{
                            bg: 'primary.0',
                        }}
                        rounded="xl"
                        w="80%"
                        borderColor="coolGray.200"
                        borderWidth="1"
                    >
                        <Center size="2" bg="primary.0"></Center>
                        <Heading size="md" bold>  Datum: {s.datum} um {s.uhrzeit} (Dauer {s.dauer}h)</Heading>
                        <Heading size="md">  Tutor:in: {s.name}</Heading>
                        <Heading size="xs">      </Heading>
                        <Heading size="xs">   Ort: {s.ort}</Heading>
                        <Heading size="xs">   Entfernung: {s.distanz}</Heading>
                        <Heading size="xs">   Preis: {s.preis}</Heading>
                        <Center size="2" bg="primary.0"></Center>
                    </Box>
                </Center>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    bezahlen("bar");
                    close(false);
                }}>
                    Barzahlung 
                </Button>
                <Button flex="2" marginRight="5" onPress={() => {
                    bezahlen("butp");
                    close(false);
                }}>
                    Bezahlung über BuTP
                </Button>
                <Button flex="1" onPress={() => {
                    close(false);
                }}>
                    Zurück
                </Button>
            </Modal.Footer>
            </Modal.Content>
        </Modal>
    </>
}