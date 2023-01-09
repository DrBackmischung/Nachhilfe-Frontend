import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';


export const KalenderDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [skillList, setSkillList] = useState();
    const [skill, setSkill] = useState("");
    const [slots, setSlotList] = useState([]);
    const [location, setLocation] = useState("");
    const [selectedSlot, setSelectedSlot] = useState();
	const [isOpenConfirmation, setOpenConfirmation] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
            setIsLoggedIn(true)
        });
        AsyncStorage.getItem('ort').then((ort) => {
            setLocation(ort)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentUser])

    const url = `${APIUrl}/timeslots/schueler/${currentUser}`;

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

	const setupData = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const response = await fetch(url, requestOptions)
        if(response.status !== 200) {
            setIsError(true);
            setIsLoading(false);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response.ok) {
            setIsError(false);
            setErrorMsg("");
            const data: any = await response.json();
            console.log("Slots ==================")
            console.log(data)
            
            console.log("nicht sortiert")
            console.log(data)
            const d = data.sort(dynamicSort("datum"))
            console.log("sortiert")
            console.log(d)
            setSlotList(d);
            setIsLoading(false);
        }
    };
        
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="700">
                <Modal.CloseButton />
                <Modal.Header>Neuen Termin buchen</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Deine nächsten Termine:
                        </Heading>
                        <Center size="3" bg="primary.0"></Center>
                        <Divider />    
                        <Center size="3" bg="primary.0"></Center>
                        {isLoading || slots === undefined || slots.length === 0 ? (<></>) :
                            slots.map((s, i) => {
                                return (
                                    <>
                                        <Center size="5" bg="primary.0"></Center>
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
                                            <Heading size="xs">   Preis: {s.preis}€</Heading>
                                            <Center size="2" bg="primary.0"></Center>
                                        </Box>
                                    </>
                                )
                            })
                        }
                        {isLoading ? (<><Spinner></Spinner></>) : (<></>)}
                    </Center>
                </Modal.Body>
                <Modal.Footer>
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