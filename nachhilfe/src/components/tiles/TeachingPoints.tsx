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
    const [teachingPoints, setTeachingPoints] = useState("");


    useEffect(() => {
        AsyncStorage.getItem('tp').then((tp) => {
            setTeachingPoints(tp)
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
                            size="lg"
                            _light={{ bg: 'blue.300' }}
                            _dark={{ bg: 'blue.400' }}
                            _text={{ opacity: 30 }}
                            source={{ uri: "https://www.iconbunny.com/icons/media/catalog/product/2/1/2163.8-teaching-icon-iconbunny.jpg" }}
                        >
                        </Avatar>
                    </Center>
                    <Spacer />
                    <Center>
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}  >
                            {teachingPoints === undefined ? (
                                <Spinner color="blue.500" />
                                ) : (<>{teachingPoints}</>)}                          
                        </Heading> 
                    </Center> 
                </Flex>
            </Center>
        </>
	);
	}
