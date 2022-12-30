import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="xl"
                _light={{ bg: 'blue.300' }}
                _dark={{ bg: 'blue.400' }}
                _text={{ opacity: 30 }}
                source={{ uri: "https://www.pngitem.com/pimgs/m/347-3477356_law-practice-management-software-for-tax-law-attorneys.png" }}
            >
              
            </Avatar>
		</VStack>
	);
};
