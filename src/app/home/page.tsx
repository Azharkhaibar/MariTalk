"use client"
import { Box, Text, Heading } from "@chakra-ui/react";
import SideBar from "../ui/sidebar";
import ChatArea from "../ui/chatareaui/chatarea";
import Profile from "../ui/profile";
const Homepage: React.FC = () => {
    return(
        <Box w="100%" h="100vh" display="flex"
            bg="gray.300"
        >
            <SideBar />
            <ChatArea />
            <Profile />
        </Box>
    )
}

export default Homepage;