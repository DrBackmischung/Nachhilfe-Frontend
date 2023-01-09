import React from 'react';
import { Avatar, VStack, Box, Center, Heading, HStack } from 'native-base';

export const Example = () => {
	return (
		<Center>
            
            <HStack
                space={3}
                alignItems="center"
                m={4}
                p={2}
                rounded="md"
                _light={{
                    bg: 'error.100',
                }}
                _dark={{
                    bg: 'error.400',
                }}
                w="70%"
            >
                <Heading size="sm">
                    Bildungs- und Teilhabeprogramm
                </Heading>
            </HStack>
        </Center>
	);
};
