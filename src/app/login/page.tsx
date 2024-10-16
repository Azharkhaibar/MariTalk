"use client";
import { useState } from "react";
import { Box, Heading, InputGroup, Text, Button, Input, InputRightElement } from "@chakra-ui/react";
import NextLink from "next/link";
const Login: React.FC = () => {
    const [passShow, setPassShow] = useState(false);
    const handlePassClick = () => setPassShow(!passShow);

    return (
        <Box
            w="100%"
            h="100vh"
            bg="gray.100"  
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                w="50%"
                h="50%"
                bg="white"  
                borderRadius="15px"  
                boxShadow="lg"  
                display="flex"
                alignItems="center"
                overflow="hidden"
            >
                <Box
                    w="50%"
                    h="100%"
                    p="20px" 
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    bg="teal.50" 
                >
                    <Heading
                        fontSize="30px" 
                        color="teal.600"
                    >
                        MariTalk App
                    </Heading>
                    <Text
                        mt="4%"
                        color="gray.600"
                        fontSize="md"
                    >
                        MariTalk is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s.
                    </Text>
                </Box>


                <Box
                    w="50%"
                    h="100%"
                    p="20px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Heading
                        mb="5%"
                        fontSize="28px"
                        color="teal.600"
                    >
                        Login
                    </Heading>
                    <InputGroup size="lg" mb="4">
                        <Input
                            pr="4.5rem"
                            placeholder="Email"
                            focusBorderColor="teal.500" 
                        />
                    </InputGroup>
                    <InputGroup size="lg" mb="6">
                        <Input
                            pr="4.5rem"
                            type={passShow ? "text" : "password"}
                            placeholder="Password"
                            focusBorderColor="teal.500"
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={handlePassClick}
                                colorScheme="teal"
                            >
                                {passShow ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        w="100%"
                        size="lg"
                        colorScheme="teal"
                        borderRadius="full"
                        _hover={{ bg: "teal.600" }} 
                    >
                        Login
                    </Button>

                    <Text
                        mt="4%"
                        fontSize="sm"
                        color="teal.600"
                        fontWeight="bold"
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                    >
                        FORGOT PASSWORD
                    </Text>
                    <Text
                        mt="auto"
                        fontSize="sm"
                        color="gray.600"
                    >
                        Don’t have an account?{" "}
                        <NextLink href="/register">
                            <Text
                                as="span"
                                color="teal.500"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ textDecoration: "underline" }}
                            >
                                Sign Up
                            </Text>
                        </NextLink>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
