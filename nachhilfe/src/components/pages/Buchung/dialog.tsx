import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, TextArea, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { event } from 'react-native-reanimated';


export const BuchungsDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [skillList, setSkillList] = useState();
    const [skill, setSkill] = useState("");
    const [slots, setSlotList] = useState([]);

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

    const url = `${APIUrl}/skills`;

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    const changeSkill = async (s) => {
        setSkill(s);
        setIsLoading(true);
        const url2 = `${APIUrl}/timeslots/skill/${s}`;
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const response = await fetch(url2, requestOptions)
        if(response.status !== 200) {
            setIsError(true);
            setIsLoading(false);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response.ok) {
            setIsError(false);
            setErrorMsg("");
            const data: any = await response.json();
            setSlotList(data);
            console.log("Slots ==================")
            console.log(data)

            data.map((s, _i) => {

            });
            setIsLoading(false);
        }
        setIsLoading(false);
    } 

	const setupData = async () => {
        const requestOptions = {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        };
        const response2 = await fetch(url, requestOptions)
        if(response2.status == 500) {
            setIsError(true);
            setErrorMsg("Server Fehler, bitte erneut versuchen")
        }
        if(response2.ok) {
            setIsLoggedIn(true);
            setIsError(false);
            setErrorMsg("");
            const data: any = await response2.json();
            setSkillList(data);
            console.log(data)
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
                            Für welches Fach suchst du einen Termin?
                        </Heading>
                        <Box maxW="300">
                            <Select selectedValue={skill} minWidth="200" accessibilityLabel="Skill auswählen..." placeholder="Skill auswählen..." _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => changeSkill(itemValue)}>
                                {skillList === undefined || skillList.length === 0 ? (<></>) :
                                    skillList.map((s, _i) => {
                                        return (<Select.Item label={s.name+" ("+s.level+")"} value={s.id} />)
                                    })
                                }
                            </Select>
                        </Box> 
                        <Center size="5" bg="primary.0"></Center>
                        <Divider />    
                        <Center size="5" bg="primary.0"></Center>
                        {isLoading || slots === undefined || slots.length === 0 ? (<></>) :
                            slots.map((s, _i) => {
                                return (
                                <>
                                    <Heading size="sm">{s.datum}</Heading>
                                </>)
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