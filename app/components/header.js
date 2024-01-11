import React from 'react';
import {
    Avatar,
    Button,
    Container,
    Grid,
    Icon,
    Wrap,
    Box,
    Center,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useDisclosure, useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import PageTransition from "@/app/components/pageTransition";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSmallerThanMd] = useMediaQuery('(max-width: 75em)');


    return (
<>

        <Grid

            borderRadius={5}
            border='2px solid #36455c'
            position="sticky"
            top="0"
            left="0"
            zIndex="999"
            minH={'100vh'}
            maxH={'auto'}

            px={10}
            w={{ md:'20%',lg:'sm' }}
            display={{base:'none',md:'none',lg:'block'}}
            bg='gray.800'
        >
                <Grid pt={20}  display='flex' flexDir='column' justifyContent='center' alignItems='center'  >
                    <Avatar size="2xl" name="Bruno Correa" src="/my.jpg" />
                     <Box pt={10}>
                         <Link href='https://github.com/correaa1' target="_blank" >
                             <Icon m={3} w={50} h={50} as={FaGithub}/>
                         </Link>
                         <Link href='https://www.linkedin.com/in/devbrunocorrea1/' target="_blank">
                        <Icon m={3} w={50} h={50} as={FaLinkedin }/>
                         </Link>
                     </Box>
                </Grid>

                <Center  flexDirection='column'  w={"100%"}>
                    <Wrap  pt={5}>
                        <Link href='/'>
                            <Button   color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose} >
                            Inicio
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap   pt={5}>
                        <Link href='/about'>
                            <Button w={250} color='white' bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose}>
                            Sobre
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap  pt={5}>
                        <Link href='/portfolio'>
                            <Button color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose}>
                            Portfolio
                        </Button>
                        </Link>
                    </Wrap>


                </Center>
            </Grid>

    {isSmallerThanMd && (
        <Button m={10} onClick={onOpen} position="fixed" top="5" left="5">
            <IoMenu size='lg' />
        </Button>
    )}

    <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight={isSmallerThanMd}
        bg='gray.800'
    >
        <DrawerOverlay />
        <DrawerContent minH='250vh'    maxW='lg'>
            <DrawerCloseButton p={5 } size='2xl' w={50} bg='gray.500' _hover={{ bg: 'gray.500' }}/>
            <DrawerHeader
                fontSize='4xl'
                px={10}
                 >Menu</DrawerHeader>

                <Grid m={20}   display='flex' flexDir='column' justifyContent='center' alignItems='center'  >
                    <Avatar size="3xl" name="Bruno Correa" src="/my.jpg" />
                    <Box pt={20}>
                        <Link href='https://github.com/correaa1' target="_blank" >
                            <Icon m={3} w={100} h={100} as={FaGithub}/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/devbrunocorrea1/' target="_blank">
                            <Icon m={3} w={100} h={100} as={FaLinkedin }/>
                        </Link>
                    </Box>
                </Grid>

                <Center  flexDirection='column'>
                    <Wrap  pt={5}>
                        <Link href='/'>
                            <Button fontSize='4xl'   color='white' p={7}  rounded='lg' w='sm'  bg='gray.600' _hover={{bg:'gray.500'}} onClick={onClose} >
                                Inicio
                            </Button>
                        </Link>
                    </Wrap>

                    <Wrap   pt={5}>
                        <Link href='/about'>
                            <Button fontSize='4xl' color='white' p={7} rounded='lg' w='sm'  bg='gray.600' _hover={{bg:'gray.500'}} onClick={onClose}>
                                Sobre
                            </Button>
                        </Link>
                    </Wrap>

                    <Wrap  pt={5}>
                        <Link href='/portfolio'>
                            <Button fontSize='4xl' color='white' p={7}  rounded='lg' w='sm'  bg='gray.600' _hover={{bg:'gray.500'}} onClick={onClose}>
                                Portfolio
                            </Button>
                        </Link>
                    </Wrap>


                </Center>

            <DrawerBody>
            </DrawerBody>
        </DrawerContent>
    </Drawer>

</>
    );
};

export default Header;