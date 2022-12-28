import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StatsDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [learningPoints, setLearingPoints] = useState(0.0);
    const [teachingPoints, setTeachingPoints] = useState(0.0);
    const [profilePoints, setProfilePoints] = useState(0.0);


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

    const url = `${APIUrl}/users/${currentUser}/points`;

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
            setLearingPoints(data);
            setProfilePoints(data);
            setTeachingPoints(data);
            console.log(data)
        }
    };
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Stats</Modal.Header>
            <Modal.Body>
                <Center w="100%">
                    <Box safeArea p="2" py="8" w="90%">
                        <>
                            <VStack justifyContent="center">
                                <Center>
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
                                    borderWidth={5}
                                    boxSize={5}
                                />
                                </Avatar>
                                <Box safeArea p="2" py="8" w="90%"></Box>
                                <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Teaching points: 
                                </Heading>
                                <Box safeArea p="1" py="8" w="90%"></Box>
                                <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Learning points:                               
                                </Heading>
                                <Box safeArea p="1" py="8" w="90%"></Box>
                                <Heading size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Overall points:
                                </Heading>
                                <Box safeArea p="1" py="8" w="90%"></Box>
                                </Center>
                                <Box safeArea p="1" py="8" w="90%"></Box>
                                <Button flex="1" onPress={() => {
                    close(false);
                }}>
                             
                                Werde besser und buche die nächste Stunde!
                                </Button>
                                
                            </VStack>
                            </>
                       
                    </Box>
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