import React from "react";
import {
  Text,
  HStack,
  Box,
  StatusBar,
  IconButton,
  Icon,
} from "native-base";

export default function Navigation() {

  return (
    <>
    <StatusBar bg="#3700B3" barStyle="light-content" />
    <Box safeAreaTop bg="violet.600" />
    <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" name="menu" color="white" />} />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon name="favorite" size="sm" color="white" />} />
        <IconButton icon={<Icon name="search" size="sm" color="white" />} />
        <IconButton icon={<Icon name="more-vert" size="sm" color="white" />} />
      </HStack>
    </HStack>
  </>
  );
}