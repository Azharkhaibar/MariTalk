"use client";
import { Box, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdCall, MdRadioButtonChecked } from "react-icons/md";
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
                <Image
                    src={manImage}
                    alt="Profile Picture"
                    width={60}
                    height={60}
                    style={{
                        borderRadius: '50%',
                        marginRight: '16px',
                        border: '2px solid white',
                    }}
                />
                <Box>
                    <Heading size="md" color="white" fontWeight="bold">Nama Anda</Heading>
                    <Text color="gray.200" fontSize="sm">Fullstack Developer</Text>
                </Box>
            </Flex>

            {/* Right Section: Status Icon and Call Icon */}
            <Flex alignItems="center">
                <Icon as={MdRadioButtonChecked} w={6} h={6} color="green.400" />
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
