import React from 'react';
import {Avatar, Button, Container, Grid, Wrap} from "@chakra-ui/react";
import Link from "next/link";
import PageTransition from "@/app/components/pageTransition";

const Header = () => {
    return (

            <Grid
                bg='ford blue'
                      borderRadius={5}
                      border='1px solid #323c62'
                      position="sticky" // Alterado para sticky
                      top="0"
                      left="0"
                      zIndex="999"
                        h={930}
                        px={10}
                      >
                <Grid   display='flex' justifyContent='center' alignItems='center'  >
                    <Avatar size="2xl" name="Bruno Correa" src="/my.jpg" />
                </Grid>
                <Container w={"100%"}>
                    <Wrap w={"100%"} pt={5}>
                        <Link href='/home'> <Button w={250} colorScheme="gray">
                            Inicio
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Link href='/about'> <Button w={250} colorScheme="gray">
                            Sobre
                        </Button>
                        </Link>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Link href='/portfolio'>
                            <Button w={250} colorScheme="gray">
                            Portfolio
                        </Button>
                        </Link>
                    </Wrap>


                </Container>
            </Grid>

    );
};

export default Header;