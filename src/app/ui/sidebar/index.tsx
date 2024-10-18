"use client";

import {
    Box,
    Text,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Icon,
    List,
    ListItem,
    Avatar,
    AvatarBadge,
    AvatarGroup
} from "@chakra-ui/react";

import Image from 'next/image'; // Pastikan impor Image dari next/image
import SideBarHeader from "./header";
import { FaMessage, FaUser } from "react-icons/fa6";
import manImage from '../../public/img/man.png';

const SideBar: React.FC = () => {
    return (
        <Box
            w="26%"
            height="100vh"
            bg="green.800"
            display="flex"
            flexDirection="column"
            justifyContent="start"
        >
            {/* Header Sidebar */}
            <Box
                w="100%"
                height="9vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <SideBarHeader />
            </Box>

            {/* Tabs Area */}
            <Box bg="white" flex="1" w="100%">
                <Tabs variant="enclosed" colorScheme="green.600" isLazy>
                    <TabList>
                        <Tab w="50%" h="6vh" display="flex" alignItems="center">
                            <Icon as={FaMessage} w={6} h={6} />
                            <Text pl={2}>Chats List</Text>
                        </Tab>
                        <Tab w="50%" h="6vh" display="flex" alignItems="center">
                            <Icon as={FaUser} w={6} h={6} />
                            <Text pl={2}>Users List</Text>
                        </Tab>
                    </TabList>

                    <TabPanels w="100%" h="100%">
                        {/* Chats List */}
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        p={4}
                                        bg="white"
                                        boxShadow="sm"
                                        borderRadius="md"
                                    >
                                        <Avatar>
                                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column" ml={4}>
                                            <Heading size="sm" color="black">John Doe</Heading>
                                            <Text color="gray.600">Last message snippet...</Text>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        p={4}
                                        bg="white"
                                        boxShadow="sm"
                                        borderRadius="md"
                                    >
                                        <Avatar>
                                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column" ml={4}>
                                            <Heading size="sm" color="black">Jane Smith</Heading>
                                            <Text color="gray.600">Another message snippet...</Text>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </TabPanel>

                        {/* Users List */}
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        p={4}
                                        bg="white"
                                        boxShadow="sm"
                                        borderRadius="md"
                                    >
                                        <Avatar>
                                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column" ml={4}>
                                            <Heading size="sm" color="black">Alice Wonderland</Heading>
                                            <Text color="gray.600">Online</Text>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        p={4}
                                        bg="white"
                                        boxShadow="sm"
                                        borderRadius="md"
                                    >
                                        <Avatar>
                                            <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column" ml={4}>
                                            <Heading size="sm" color="black">Bob Builder</Heading>
                                            <Text color="gray.600">Offline</Text>
                                        </Box>
                                    </Box>
                                </ListItem>

                                <ListItem>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        p={4}
                                        bg="white"
                                        boxShadow="sm"
                                        borderRadius="md"
                                    >
                                        <Avatar>
                                            <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
                                        </Avatar>
                                        <Box display="flex" flexDirection="column" ml={4}>
                                            <Heading size="sm" color="black">Charlie Chaplin</Heading>
                                            <Text color="gray.600">Offline</Text>
                                        </Box>
                                    </Box>
                                </ListItem>
                            </List>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default SideBar;
