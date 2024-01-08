import React from 'react';
import {Avatar, Button, Container, Grid, Icon, Wrap, Box} from "@chakra-ui/react";
import Link from "next/link";
import PageTransition from "@/app/components/pageTransition";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Header = () => {

    return (

            <Grid
                      borderRadius={5}
                      border='2px solid #36455c'
                      position="sticky"
                      top="0"
                      left="0"
                      zIndex="999"
                        h={930}
                        px={10}
                      >
                <Grid   display='flex' flexDir='column' justifyContent='center' alignItems='center'  >
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

                <Container w={"100%"}>
                    <Wrap w={"100%"} pt={5}>
                        <Link href='/'>
                            <Button color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}} >
                            Inicio
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Link href='/about'>
                            <Button w={250} color='white' bg='gray.700' _hover={{bg:'gray.600'}}>
                            Sobre
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Link href='/portfolio'>
                            <Button color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}}>
                            Portfolio
                        </Button>
                        </Link>
                    </Wrap>


                </Container>
            </Grid>

    );
};

export default Header;