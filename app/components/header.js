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

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');

    return (
<>
        <Grid
            borderRadius={5}
            border='2px solid #36455c'
            position="relative"
            top="0"
            left="0"
            zIndex="999"
            h={920}
            minH={'100vh'}
            maxH={{base:'35em', }}
            px={10}
            w={{base:'93.75em', md:'block', }}
            display={{base:'none',md:'block'}}
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
        <Button onClick={onOpen} position="fixed" top="5" left="5">
            Acessar Menu
        </Button>
    )}

    <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        isFullHeight={isSmallerThanMd}
    >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
                borderRadius={5}
                border='2px solid #36455c'
                position="relative"
                top="0"
                left="0"
                zIndex="999"
                h={920}
                px={10}
                 >Menu</DrawerHeader>

                <Grid  display='flex' flexDir='column' justifyContent='center' alignItems='center'  >
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

                <Center  flexDirection='column'>
                    <Wrap  pt={5}>
                        <Link href='/'>
                            <Button   color='white' rounded='lg' bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose} >
                                Inicio
                            </Button>
                        </Link>
                    </Wrap>

                    <Wrap   pt={5}>
                        <Link href='/about'>
                            <Button color='white' rounded='lg' bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose}>
                                Sobre
                            </Button>
                        </Link>
                    </Wrap>

                    <Wrap  pt={5}>
                        <Link href='/portfolio'>
                            <Button color='white' rounded='lg'  bg='gray.700' _hover={{bg:'gray.600'}} onClick={onClose}>
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