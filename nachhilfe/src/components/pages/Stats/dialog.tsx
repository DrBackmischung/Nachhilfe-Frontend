import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';


export const StatsDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [learningPoints, setLearningPoints] = useState();
    const [teachingPoints, setTeachingPoints] = useState();
    const [profilePoints, setProfilePoints] = useState();


    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser("000001")
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
                setLearningPoints(data.learningPoints)
            }
        }
    };
        
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Stats</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                Hier siehst du deine Statistiken!
            </Heading>
            <>

                <Box safeArea p="1" py="8" w="90%"></Box>
                    <VStack justifyContent="center">
                        <Center>
                            <Avatar
                                alignSelf="right"
                                size="lg"
                                _light={{ bg: 'blue.300' }}
                                _dark={{ bg: 'blue.400' }}
                                _text={{
                                    opacity: 100,
                                }}
                            >
                                SA
                            <Avatar.Badge
                                _light={{ bg: 'green.300' }}
                                _dark={{ bg: 'green.400' }}
                                borderWidth={2}
                                boxSize={6}
                            />
                            </Avatar>
                            <Box safeArea p="1" py="4" w="90%"></Box>
                            <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Teaching points: 
                            </Heading>
                            <Heading size="sm" fontWeight="200" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Hierzu fallen Punkte, bei denen du anderen Schülern Unterricht gegeben hast   lorem ipsum                          
                            </Heading>
                            <Box safeArea p="1" py="2" w="90%"></Box>
                            <Avatar
                                marginRight="20"
                                size="md"
                                _light={{ bg: 'blue.300' }}
                                _dark={{ bg: 'blue.400' }}
                                _text={{ opacity: 30 }}
                                source={{ uri: "https://www.iconbunny.com/icons/media/catalog/product/1/2/122.9-teacher-ii-icon-iconbunny.jpg" }}
                            >
                            </Avatar>
                            <Box safeArea p="1" py="4" w="90%"></Box>
                            {learningPoints === undefined ? (<>Muss noch laden...</>) : (<>Geladen!</>)}
                            <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Learning points: {learningPoints}                          
                            </Heading>  
                            <Heading size="sm" fontWeight="200" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Hierzu fallen Punkte, bei denen du anderen Schülern Unterricht gegeben hast                             
                            </Heading>
                                 <Box safeArea p="1" py="2" w="90%"></Box>
                            <Avatar
                                marginRight="20"
                                size="md"
                                _light={{ bg: 'blue.300' }}
                                _dark={{ bg: 'blue.400' }}
                                _text={{ opacity: 30 }}
                                source={{ uri: "https://cdn1.iconfinder.com/data/icons/rounded-icons-for-it/512/student-phd-professor-hat-man-512.png" }}
                            >
                            </Avatar>
                            <Box safeArea p="1" py="4" w="90%"></Box>
                            <Heading size="md" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                                Profile points: 
                            </Heading>
                            <Heading size="sm" fontWeight="200" color="darkGray.800" _dark={{color: "warmGray.50"}}>
                                Hierzu fallen Punkte, bei denen du anderen Schülern Unterricht gegeben hast                             
                            </Heading><Box safeArea p="1" py="2" w="90%"></Box>
                            <Avatar
                                marginRight="20"
                                size="md"
                                _light={{ bg: 'blue.300' }}
                                _dark={{ bg: 'blue.400' }}
                                _text={{ opacity: 30 }}
                                source={{ uri: "https://www.clipartmax.com/png/middle/204-2045301_education-icon-education-logo-png-blue.png" }}
                            >
                            </Avatar>
                        <Box safeArea p="1" py="8" w="90%"></Box>
                    </Center>                            
                </VStack>
            </>
                           
        </Center>
            </Modal.Body>
            <Modal.Footer>
            <Button flex="2" marginRight="5" onPress={() => {
                    //verlinkung zur Buchung
                }}>
                    Neuen Termin buchen um besser zu werden
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