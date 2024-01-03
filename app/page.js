
import {Avatar, Box, Button, Center, Container, Flex, Grid, GridItem, Text, Wrap, WrapItem} from "@chakra-ui/react";
import React from "react";
import Background from "@/app/components/particles";

function IndexPage() {
    return (
        <Flex>
            <Grid bg='ford blue'  p={10} h={1000} w='100%' >
                <Grid w={250} justifyItems="center">
                    <Avatar size="2xl" name="Bruno Correa" src="/my.jpg" />
                </Grid>
                <Container w={"100%"}>
                    <Wrap w={"100%"} pt={5}>
                        <Button w={"100%"} colorScheme="red">
                            Inicio
                        </Button>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Button w={"100%"} colorScheme="red">
                            Sobre
                        </Button>
                    </Wrap>

                    <Wrap w={"100%"} pt={5}>
                        <Button w={"100%"} colorScheme="red">
                            Portifolio
                        </Button>
                    </Wrap>

                </Container>
            </Grid>

             <Box >
                 <Background /></Box>


        </Flex>
    );
}

export default IndexPage;