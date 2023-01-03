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
                source={{ uri: "https://png.pngtree.com/element_our/png_detail/20181227/administration-vector-icon-png_286819.jpg" }}
            >
            </Avatar>
		</VStack>
	);
};