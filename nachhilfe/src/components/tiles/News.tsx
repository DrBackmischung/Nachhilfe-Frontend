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
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi54Khu5Au9mw_tDE3wULjIqHLeJgYcgHKiYe7IjVE1B9fKa7PMHAuylsV3k1c09IHHNQ&usqp=CAU" }}
            >
              
            </Avatar>
		</VStack>
	);
};
