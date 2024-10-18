import { Box, Heading, Text, Avatar, AvatarBadge, List, ListItem } from "@chakra-ui/react";

const BodyChatArea: React.FC = () => {
    return (
        <Box w="100%" h="90vh" bg="gray.200" overflowY="auto">
            {/* Section for "Today" label */}
            <Box
                p="8px"
                w="100px"
                bg="gray.500"
                borderRadius="full"
                m="auto"
                mt="2%"
            >
                <Text textAlign="center">Today</Text>
            </Box>

            <List spacing={3} mt="2%">
                <ListItem>
                    <Box display="flex" alignItems="center">
                        <Avatar ml={4}>
                            <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
                        </Avatar>
                        <Box
                            ml={3}
                            p={4}
                            mr={4}
                            bg="white"
                            boxShadow="sm"
                            borderRadius="md"
                            w="full"
                        >
                            <Heading size="sm" color="black">Bob Builder</Heading>
                            <Text color="gray.600" mt="1%">
                                Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat, Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat, Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat
                            </Text>
                            <Text mt="1%" textAlign="end">12:50</Text>
                        </Box>
                    </Box>
                </ListItem>

                {/* Right Side Message */}
                <ListItem>
                    <Box display="flex" alignItems="center" justifyContent="flex-end">
                        <Box
                            mr={3}
                            ml={4}
                            p={4}
                            bg="white"
                            boxShadow="sm"
                            borderRadius="md"
                            maxW="full"
                        >
                            <Heading size="sm" textAlign="right" color="black">Alice Wonderland</Heading>
                            <Text color="gray.600" mt="1%" textAlign="right">
                                Yang boneng ah elu
                            </Text>
                            <Text mt="1%" textAlign="start">13:30</Text>
                        </Box>
                        <Avatar mr={4}>
                            <AvatarBadge borderColor='papayawhip' bg='green.500' boxSize='1.25em' />
                        </Avatar>
                    </Box>
                </ListItem>
            </List>
        </Box>
    );
}

export default BodyChatArea;
