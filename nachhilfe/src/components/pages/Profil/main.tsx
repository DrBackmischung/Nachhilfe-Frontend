import React, { useState } from 'react';
import { Alert, Box, Button, Center, FormControl, Heading, HStack, Input, Link, Stack, VStack } from 'native-base';
import { Text } from 'react-native-svg';

export const Example = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    
  };

  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Willkommen!
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Einloggen, um Inhalt nutzen zu können!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Benutzername</FormControl.Label>
            <Input 
              onChange={(e: any) => {
                setUserName(e.target.value);
                return;
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Passwort</FormControl.Label>
            <Input
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
                return;
              }}
            />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Passwort vergessen?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => {handleSubmit()}}
          >
            Einloggen
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>Neu hier?{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Registrieren
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};