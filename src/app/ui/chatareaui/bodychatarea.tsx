import { Box, Heading, Text, Avatar, AvatarBadge, List, ListItem, Icon } from "@chakra-ui/react";
import { LuReplyAll } from "react-icons/lu";
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
                            <Heading size="sm" color="black">Nesya</Heading>
                            <Text color="gray.600" mt="1%">
                                Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat, Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat, Ini Teks panjang sekali ya guys
                                ini pertama kali gw ngebungkus projek realtime chat
                            </Text>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text mt="1%">12:50</Text>
                                <Icon as={LuReplyAll} w={5} h={5} />
                            </Box>
                        </Box>
                    </Box>
                </ListItem>

                <ListItem pt="2%">
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
                            <Heading size="sm" color="black">Samuel</Heading>
                            <Text color="gray.600" mt="1%">
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text mt="1%">12:50</Text>
                                <Icon as={LuReplyAll} w={5} h={5} />
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem pt="2%">
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
                            <Heading size="sm" textAlign="right" color="black">Azhar Khaibar</Heading>
                            <Text color="gray.600" mt="1%" textAlign="right">
                                Yang boneng ah elu
                            </Text>
                            <Text mt="1%" textAlign="end">13:30</Text>
                        </Box>
                        <Avatar mr={4}>
                            <AvatarBadge borderColor='papayawhip' bg='green.500' boxSize='1.25em' />
                        </Avatar>
                    </Box>
                </ListItem>
                <ListItem pt="2%">
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
                            <Heading size="sm" textAlign="right" color="black">Azhar Khaibar</Heading>
                            <Text color="gray.600" mt="1%" textAlign="right">
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            </Text>
                            <Text mt="1%" textAlign="end">13:30</Text>
                        </Box>
                        <Avatar mr={4}>
                            <AvatarBadge borderColor='papayawhip' bg='green.500' boxSize='1.25em' />
                        </Avatar>
                    </Box>
                </ListItem>
                <ListItem pt="2%">
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
                            <Heading size="sm" color="black">Samuel</Heading>
                            <Text color="gray.600" mt="1%">
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Text mt="1%">12:50</Text>
                                <Icon as={LuReplyAll} w={5} h={5} />
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
            </List>
        </Box>
    );
}

export default BodyChatArea;
