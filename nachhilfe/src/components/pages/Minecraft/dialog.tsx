import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';


export const MCDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [mc1, setMc1] = useState();
    const [mc2, setMc2] = useState();
    const [mc3, setMc3] = useState();


    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
            setIsLoggedIn(true)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentUser])

    const url = `${APIUrl}/stats/user/${currentUser}`;

	const setupData = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        
        const response = await fetch(url, requestOptions)
        if(response.status == 500) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response.ok) {
            setIsError(false);
            setErrorMsg("");
            const data: any = await response.json();
            if (data !== undefined) {
                setMc1(data.mc1)
                setMc2(data.mc2)
                setMc3(data.mc3)
            }
        }
    };
        
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="700">
                <Modal.CloseButton />
                <Modal.Header>Minecraft-Challenges</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Hier siehst du deine abgeschlossenen Minecraft-Challenges!
                        </Heading>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Divider/>
                        <Center size="3" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            UND-Schaltung: {mc1 === 1 ? ("Geschafft!") : ("Noch nicht geschafft!")}
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            ODER-Schaltung: {mc2 === 1 ? ("Geschafft!") : ("Noch nicht geschafft!")}
                        </Heading>
                        <Center size="2" bg="primary.0" _text={{
                            color: "coolGray.800"
                        }}>
                        </Center>
                        <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            XOR-Schaltung: {mc3 === 1 ? ("Geschafft!") : ("Noch nicht geschafft!")}
                        </Heading>
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