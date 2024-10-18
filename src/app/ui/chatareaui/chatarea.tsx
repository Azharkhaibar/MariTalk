import { Box, Heading, Text, Icon, Image, Flex } from "@chakra-ui/react";
import ChatAreaHeader from "./headerchatarea";
import BodyChatArea from "./bodychatarea";
import FooterChatArea from "./footerchatarea";
const ChatArea: React.FC = () => {
    return(
        <Box w="55%" bg="blue" h="100%" display="flex" flexDirection="column">
            <ChatAreaHeader />
            <BodyChatArea />
            <FooterChatArea />
        </Box>
    )
}

export default ChatArea;