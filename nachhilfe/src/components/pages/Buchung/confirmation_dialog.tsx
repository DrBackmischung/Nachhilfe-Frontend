import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ConfirmationDialog = (props: any) => {
    const {isOpen, close, s, userId, trigger} = props
    const toast = useToast();
    const [currentUser, setCurrentUser] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
        });
    }, [isOpen])

    const barzahlung = async () => {

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
                bezahlungErfolgt: '',
                schuelerId: currentUser,
                lehrerId: s.lehrerId,
                distanz: s.distanz
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
        toast.show({description: "Termin gebucht! Die Bestätigungsmail wird verschickt."})
        trigger();
    }
    
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
                    barzahlung();
                    close(false);
                }}>
                    Barzahlung
                </Button>
                <Button flex="2" marginRight="5" onPress={() => {
                    close(false);
                }}>
                    Paypal
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