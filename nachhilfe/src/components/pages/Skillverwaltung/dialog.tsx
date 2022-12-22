import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SkillverwaltungDialog = (props: any) => {
    const {isOpen, close} = props
    const [currentUser, setCurrentUser] = useState("");
    const [skillList, setSkillList] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [refetch, triggerRefetch] = useState();
    const [skill, setSkill] = useState("");

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
    const urlAdd = `${APIUrl}/users/${currentUser}/${skill}`;
  
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

    const addSkill = async () => {     
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        };
        const response3 = await fetch(urlAdd, requestOptions)
        if(response3.ok) {
            setIsError(false);
            setErrorMsg("");
        }
    }
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Skills</Modal.Header>
            <Modal.Body>
                <Center w="100%">
                    <Box maxW="300">
                        <Select selectedValue={skill} minWidth="200" accessibilityLabel="Skill auswählen..." placeholder="Skill auswählen..." _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setSkill(itemValue)}>
                            {skillList === undefined || skillList.length === 0 ? (<></>) :
                                skillList.map((s, _i) => {
                                    return (<Select.Item label={s.name+" ("+s.level+")"} value={s.id} />)
                                })
                            }
                        </Select>
                    </Box>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    addSkill()
                }}>
                    Hinzufügen
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