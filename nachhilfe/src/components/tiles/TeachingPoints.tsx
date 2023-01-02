import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
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
    const [learningPoints, setLearningPoints] = useState();
    const [teachingPoints, setTeachingPoints] = useState();
    const [profilePoints, setProfilePoints] = useState();


    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentId("000001")
            setIsLoggedIn(true)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentId])

    const url = `${APIUrl}/stats/user/${currentId}/tp`;
   
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
                setLearningPoints(data.teachingPoints)
            }
        }
    };
        

    // setupData -> APIURL/stats/user/{id}/lp
    // Async Storage

    return (
		<VStack justifyContent="center" w="80%">
           <Avatar                    
                marginLeft={5}
                size="md"
                _light={{ bg: 'blue.300' }}
                _dark={{ bg: 'blue.400' }}
                _text={{ opacity: 30 }}
                source={{ uri: "https://cdn1.iconfinder.com/data/icons/rounded-icons-for-it/512/student-phd-professor-hat-man-512.png" }}
            >
            </Avatar>
            <Heading marginLeft={5} size="sm" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
               	marginLeft={5} {teachingPoints === undefined ? (
                    <Spinner color="blue.500" />
                    ) : (<>{teachingPoints} </>)}                          
            </Heading>  
		</VStack>
	);
	}