"use client"
import { Box, Flex, Icon, Input } from "@chakra-ui/react";
import { MdOutlineEmojiEmotions, MdOutlineKeyboard } from "react-icons/md";
import { IoVideocamOutline, IoIosSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";

const FooterChatArea: React.FC = () => {
    return (
        <Box w="100%" h="11vh" bg="gray.200" borderTop="1px solid black" p={3}>
            <Flex align="center" h="100%">
                <Flex gap={4}>
                    <Icon as={MdOutlineEmojiEmotions} w={6} h={6} cursor="pointer" />
                    <Icon as={MdOutlineKeyboard} w={6} h={6} cursor="pointer" />
                    <Icon as={IoVideocamOutline} w={6} h={6} cursor="pointer" />
                    <Icon as={ImAttachment} w={6} h={6} cursor="pointer" />
                </Flex>
                <Input
                    ml={4}
                    placeholder="Type something to send..."
                    focusBorderColor="teal.500"
                    flex="1"
                />
                <Icon as={IoIosSend} w={6} h={6} ml={4} cursor="pointer" />
            </Flex>
        </Box>
    );
};

export default FooterChatArea;
