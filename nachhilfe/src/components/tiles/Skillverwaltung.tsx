import React from 'react';
import { Avatar, VStack, Box, HStack, FormControl, Input, Flex, Center, Select, CheckIcon } from 'native-base';

export const Example = () => {
	return (
        <HStack
            alignItems="center"
            m={4}
            p={2}
            rounded="md"
            _light={{
                bg: 'yellow.200',
            }}
            _dark={{
                bg: 'yellow.500', 
            }}
            w="80%"
        >
        <Input isDisabled={true} m={1}  placeholder={"Skill..."} width="75%"/>
                <Input isDisabled={true} m={1}  placeholder={"User..."} width="75%"/>
        </HStack>
	);
};