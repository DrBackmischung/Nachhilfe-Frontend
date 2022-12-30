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
                source={{ uri: "https://static.vecteezy.com/system/resources/previews/005/568/820/original/ranking-factor-icon-in-trendy-long-shadow-style-isolated-on-soft-blue-background-free-vector.jpg" }}
            >
              
            </Avatar>
		</VStack>
	);
};
