import React from 'react';
import { Avatar, VStack, Box } from 'native-base';

export const Example = () => {
	return (
		<VStack justifyContent="center" w="80%">
            <Avatar
                alignSelf="center"
                size="xl"
                _light={{ bg: 'red.300' }}
                _dark={{ bg: 'red.400' }}
                _text={{ opacity: 30 }}
                source={{ uri: "https://media.istockphoto.com/id/1251324633/pt/vetorial/calendar-image-with-specific-date-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=BJzwVNOkzK1Vu8283UmJOdDNm5IZIkayfIC6hMmKdqI=" }}
            >
              
            </Avatar>
		</VStack>
	);
};
