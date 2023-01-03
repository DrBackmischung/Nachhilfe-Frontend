import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="lg"
                _light={{ bg: 'blue.300' }}
                _dark={{ bg: 'blue.400' }}
                _text={{ opacity: 0 }}
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/230/230403.png?w=360" }}
            >
            </Avatar>
		</VStack>
	);
};