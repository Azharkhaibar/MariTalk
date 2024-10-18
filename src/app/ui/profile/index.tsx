"use client"
import { Box, Text, Heading, Avatar } from "@chakra-ui/react";

const Profile: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center" 
            justifyContent="center"
            textAlign="center" 
            m="auto"
        >
            <Avatar
                size='xl'
                name='Azhar Khaibar'
                src='https://bit.ly/prosper-baba'
                mb={4} // Margin bottom for spacing
            />
            <Heading mb={2}>Azhar Khaibar</Heading>
            <Text mb={1} fontSize="18px">Fullstack Developer</Text>
            <Text color="gray.600">azharasykari@gmail.com</Text> {/* Fixed email typo */}
        </Box>
    );
};

export default Profile;
