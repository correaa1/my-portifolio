import React from 'react';
import {Avatar, Button, Container, Grid, Icon, Wrap, Box, Center} from "@chakra-ui/react";
import Link from "next/link";
import PageTransition from "@/app/components/pageTransition";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Header = () => {

    return (

        <Grid
            borderRadius={5}
            border='2px solid #36455c'
            position="relative"
            top="0"
            left="0"
            zIndex="999"
            h={920}
            minH={{ md:'90em'}}
            maxH={{base:'35em', }}
            px={10}
            w={{base:'93.75em', md:'block'}}

        >
                <Grid    display='flex' flexDir='column' justifyContent='center' alignItems='center'  >
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

                <Center position={{base:'none', md:'relative'}} top={  {base:'none', md:'-500px'}} flexDirection='column'  w={"100%"}>
                    <Wrap  pt={5}>
                        <Link href='/'>
                            <Button   color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}} >
                            Inicio
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap   pt={5}>
                        <Link href='/about'>
                            <Button w={250} color='white' bg='gray.700' _hover={{bg:'gray.600'}}>
                            Sobre
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap  pt={5}>
                        <Link href='/portfolio'>
                            <Button color='white' w={250} bg='gray.700' _hover={{bg:'gray.600'}}>
                            Portfolio
                        </Button>
                        </Link>
                    </Wrap>


                </Center>
            </Grid>

    );
};

export default Header;