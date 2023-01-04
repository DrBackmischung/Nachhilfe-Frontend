import React, { useEffect, useState } from 'react';
import { Alert, Avatar, Box, Button, Center, CheckIcon, Divider, FormControl, Heading, HStack, Input, Link, Modal, Select, Spinner, Stack, useToast, VStack } from 'native-base';
import { Line, Text } from 'react-native-svg';
import { APIUrl } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerRouter } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const StundenplanerDialog = (props: any) => {
    const {isOpen, close} = props
    const d = new Date();
    const d_year = ""+d.getFullYear();
    const d_day = ""+d.getDate();
    const d_month = d.getMonth()+1+"";
    const toast = useToast();
    const [currentUser, setCurrentUser] = useState("");
    const [skillList, setSkillList] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Server Fehler, bitte erneut versuchen.");
    const [skill, setSkill] = useState("");
    const [time, setTime] = useState("");
    const [year, setYear] = useState(d_year);
    const [month, setMonth] = useState(d_month.length === 1 ? "0"+d_month : d_month);
    const [day, setDay] = useState(d_day.length === 1 ? "0"+d_day : d_day);
    const [location, setLocation] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [created, setCreated] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('user').then((user) => {
            setCurrentUser(user)
        });
    }, [isOpen])

    useEffect(() => {
        if(isOpen) {
            setupData();
        }
    }, [isOpen, currentUser])

    const url = `${APIUrl}/users/${currentUser}/skills`;
    const urlAdd = `${APIUrl}/timeslots`;
  
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
            setIsError(false);
            setErrorMsg("");
            const data: any = await response2.json();
            setSkillList(data);
            console.log(data)
        }
    };

    const createAppointment = async () => {     
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                datum: `${day}.${month}.${year}`,
                wochentag: "",
                ort: location,
                fach: skill,
                uhrzeit: time,
                dauer: duration,
                preis: price,
                bezahlungErfolgt: "",
                schuelerId: "",
                lehrerId: currentUser,
                distanz: ""
            }),
        };
        const response3 = await fetch(urlAdd, requestOptions)
        if(response3.status == 500) {
            setIsError(false);
            setErrorMsg("");
            setCreated(true)
            toast.show({description: "Termin angelegt!"})
        }
    }
    
    return <>
        <Modal isOpen={isOpen} onClose={() => close()} avoidKeyboard>
            <Modal.Content maxWidth="350">
            <Modal.CloseButton />
            <Modal.Header>Termine anbieten</Modal.Header>
            <Modal.Body>
                <Center w="100%">
                    <Box maxW="300">
                        <Center>
                            <VStack space={2.5}>
                                    <VStack>
                                        <FormControl.Label>Tag</FormControl.Label>
                                        <Select selectedValue={day} minWidth="200" accessibilityLabel="Tag..." placeholder="Tag..." _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" /> 
                                        }} mt={1} onValueChange={itemValue => setDay(itemValue)}>
                                            <Select.Item label="01" value="01"/>
                                            <Select.Item label="02" value="02"/>
                                            <Select.Item label="03" value="03"/>
                                            <Select.Item label="04" value="04"/>
                                            <Select.Item label="05" value="05"/>
                                            <Select.Item label="06" value="06"/>
                                            <Select.Item label="07" value="07"/>
                                            <Select.Item label="08" value="08"/>
                                            <Select.Item label="09" value="09"/>
                                            <Select.Item label="10" value="10"/>
                                            <Select.Item label="11" value="11"/>
                                            <Select.Item label="12" value="12"/>
                                            <Select.Item label="13" value="13"/>
                                            <Select.Item label="14" value="14"/>
                                            <Select.Item label="15" value="15"/>
                                            <Select.Item label="16" value="16"/>
                                            <Select.Item label="17" value="17"/>
                                            <Select.Item label="18" value="18"/>
                                            <Select.Item label="19" value="19"/>
                                            <Select.Item label="20" value="20"/>
                                            <Select.Item label="21" value="21"/>
                                            <Select.Item label="22" value="22"/>
                                            <Select.Item label="23" value="23"/>
                                            <Select.Item label="24" value="24"/>
                                            <Select.Item label="25" value="25"/>
                                            <Select.Item label="26" value="26"/>
                                            <Select.Item label="27" value="27"/>
                                            <Select.Item label="28" value="28"/>
                                            <Select.Item label="29" value="29"/>
                                            <Select.Item label="30" value="30"/>
                                            <Select.Item label="31" value="31"/>
                                        </Select>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Monat</FormControl.Label>
                                        <Select selectedValue={month} minWidth="200" accessibilityLabel="Monat..." placeholder="Monat..." _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" /> 
                                        }} mt={1} onValueChange={itemValue => setMonth(itemValue)}>
                                            <Select.Item label="Januar" value="01"/>
                                            <Select.Item label="Februar" value="02"/>
                                            <Select.Item label="März" value="03"/>
                                            <Select.Item label="April" value="04"/>
                                            <Select.Item label="Mai" value="05"/>
                                            <Select.Item label="Juni" value="06"/>
                                            <Select.Item label="Juli" value="07"/>
                                            <Select.Item label="August" value="08"/>
                                            <Select.Item label="September" value="09"/>
                                            <Select.Item label="Oktober" value="10"/>
                                            <Select.Item label="November" value="11"/>
                                            <Select.Item label="Dezember" value="12"/>
                                        </Select>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Jahr</FormControl.Label>
                                        <Select selectedValue={year} minWidth="200" accessibilityLabel="Jahr..." placeholder="Jahr..." _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" /> 
                                        }} mt={1} onValueChange={itemValue => setYear(itemValue)}>
                                            <Select.Item label="2023" value="2023"/>
                                            <Select.Item label="2024" value="2024"/>
                                            <Select.Item label="2025" value="2025"/>
                                        </Select>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Zeit</FormControl.Label>
                                        <Input onChangeText={value => setTime(value)} minWidth="200"></Input>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Dauer</FormControl.Label>
                                        <Input onChangeText={value => setDuration(value)} minWidth="200"></Input>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Preis</FormControl.Label>
                                        <Input onChangeText={value => setPrice(value)} minWidth="200"></Input>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Adresse</FormControl.Label>
                                        <Input onChangeText={value => setLocation(value)}></Input>
                                    </VStack>
                                    <VStack>
                                        <FormControl.Label>Skill</FormControl.Label>
                                        <Select selectedValue={skill} minWidth="200" accessibilityLabel="Skill..." placeholder="Skill..." _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />
                                        }} mt={1} onValueChange={itemValue => setSkill(itemValue)}>
                                            {skillList === undefined || skillList.length === 0 ? (<></>) :
                                                skillList.map((s, _i) => {
                                                    return (<Select.Item label={s.name+" ("+s.level+")"} value={s.id} />)
                                                })
                                            }
                                        </Select>
                                    </VStack>
                            </VStack>
                        </Center>
                    </Box>
                </Center>
            </Modal.Body>
            <Modal.Footer>
                <Button flex="2" marginRight="5" onPress={() => {
                    createAppointment()
                }}>
                    Termin anlegen
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