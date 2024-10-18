"use client";
import { Box, Heading, Text, Icon, Avatar } from "@chakra-ui/react";
import { MdMoreVert } from 'react-icons/md'; // Import vertical dots icon

const SideBarHeader: React.FC = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            p={4} 
        >
            <Avatar
                w="50px"
                h="50px"
                name='Azhar Khaibar'
                src='https://bit.ly/prosper-baba'
                mr={4} // Margin right for spacing between avatar and text
            />
            <Box display="flex" flexDirection="column">
                <Heading size="md" color="white">Nama Anda</Heading>
                <Text color="white" fontSize="sm">Fullstack Developer</Text> {/* Font size adjustment for the role */}
            </Box>
            <Icon
                as={MdMoreVert}
                w={6} // Adjust icon size for consistency
                h={6}
                color="white"
                ml="auto" // Automatically push the icon to the right
                cursor="pointer"
            />
        </Box>
    );
};

export default SideBarHeader;
