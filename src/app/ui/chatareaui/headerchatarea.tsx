"use client";
import { Box, Text, Heading, Flex, Icon, Avatar } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdCall, MdRadioButtonChecked, MdOutlineVideoCall } from "react-icons/md";
import Image from 'next/image';
import manImage from '../../public/img/man.png';

const ChatAreaHeader: React.FC = () => {
    return (
        <Box
            w="100%"
            h="9vh"
            bgGradient="linear(to-r, purple.600, purple.400)"
            display="flex"
            bg="green.500"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            
        >
            {/* Left Section: Back Arrow, Profile Image, and Info */}
            <Flex alignItems="center">
                <Icon
                    as={FaArrowLeft}
                    w={5}
                    h={5}
                    color="white"
                    mr={4}
                    _hover={{ color: "gray.200", cursor: "pointer" }}
                />
                <Avatar
                    w="50px"
                    h="50px"
                    name='Azhar Khaibar'
                    src='https://bit.ly/prosper-baba'
                    mr={4} // Margin right for spacing between avatar and text
                />
                <Box>
                    <Heading size="md" color="white" fontWeight="bold">Nama Anda</Heading>
                    <Text color="gray.200" fontSize="sm">Fullstack Developer</Text>
                </Box>
            </Flex>

            {/* Right Section: Status Icon and Call Icon */}
            <Flex alignItems="center">
                <Icon as={MdOutlineVideoCall} w={6} h={6} color="white" />
                <Icon
                    as={MdCall}
                    w={6}
                    h={6}
                    color="white"
                    ml={4}
                    _hover={{ color: "gray.200", cursor: "pointer" }}
                />
            </Flex>
        </Box>
    );
}

export default ChatAreaHeader;
