import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Flex, FormControl, Heading, HStack, Input, Link, Modal, Select, Spacer, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl} from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';


export const Example = (props: any) => {
    const {isOpen, close} = props
    const [currentId, setCurrentId] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [learningPoints, setLearningPoints] = useState("");


    useEffect(() => {
        AsyncStorage.getItem('lp').then((lp) => {
            setLearningPoints(lp)
        });
    })
        

    // setupData -> APIURL/stats/user/{id}/lp
    // Async Storage

    return (
        <>
            <Center>
                <Flex direction='row'>
                    <Center>
                        <Avatar             
                            size="md"
                            _light={{ bg: 'blue.300' }}
                            _dark={{ bg: 'blue.400' }}
                            _text={{ opacity: 30 }}
                            source={{ uri: "https://cdn1.iconfinder.com/data/icons/rounded-icons-for-it/512/student-phd-professor-hat-man-512.png" }}
                        >
                        </Avatar>
                    </Center>
                    <Spacer />
                    <Center>
                        <Heading size="xl" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}  >
                            {learningPoints === undefined ? (
                                <Spinner color="blue.500" />
                                ) : (<>{learningPoints}</>)}                          
                        </Heading> 
                    </Center> 
                </Flex>
            </Center>
        </>
	);
	}
