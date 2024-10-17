"use client"
import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import Image from 'next/image';
import { MdMoreVert } from 'react-icons/md'; // Impor ikon titik tiga vertikal
import manImage from '../../public/img/man.png';

const SideBarHeader: React.FC = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            p={4} // Memberikan padding untuk tampilan lebih baik
        >
            <Image
                src={manImage}
                alt="Profile Picture"
                width={70}
                height={80}
                style={{ borderRadius: '50%', marginRight: '16px' }}
            />
            <Box display="flex" flexDirection="column">
                <Heading size="md" color="white">Nama Anda</Heading>
                <Text color="white">Fullstack Developer</Text>
            </Box>
            <Icon
                as={MdMoreVert}
                w={8}
                h={8}
                color="white"
                ml="auto"
                cursor="pointer"
            />
        </Box>
    );
};

export default SideBarHeader;
