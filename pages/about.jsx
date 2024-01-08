import React from 'react';
import Header from "@/app/components/header";
import {Box, Container, Flex, Grid, Text, Image, GridItem, Wrap, Button, Center} from "@chakra-ui/react";
import PageTransition from "@/app/components/pageTransition";
import { Icon } from '@chakra-ui/react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { motion } from 'framer-motion';
const About = () => {
    const handleDownload = () => {
        const pdfPath = '/Curriculo2023Att.pdf';

        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = 'Curriculo2023Att.pdf';

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    };
    return (

            <Flex>
            <Header/>
                <PageTransition>
            <Flex bg='#131325' flexDirection='column' ps={20} w={1500} h={1200}>
                        <Text  fontSize='4xl'  p={10} >
                    Sobre mim
                        </Text>
                < Flex flexDirection='row'   >
                    <Image h={350} w={550} src='/my.jpg' />
                    <Grid>
                        <Text  fontSize='lg'  p={10} >
                          Meu nome é Bruno Correa, gosto muito de tecnologia e busco sempre estar aprendendo e inovando cada vez mais.
                        </Text>
                        <Text fontSize='lg' p={10}>
                         Apaixonado pelo ecossistema React/Next.js e venho buscando trabalhar com essas tecnologias frequentemente
                        </Text>
                     </Grid>
                </Flex>
                <Center  m={20}>
                    <Button bg='gray.700' _hover={{bg:'gray.600'}} onClick={handleDownload} >
                    Download curriculo
                </Button>
                </Center>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                    >
                        <Box pt={20}>
                        <Text fontSize='4xl' p={10}>
                            Serviços que ofereço
                        </Text>
                    </Box>
                        <Wrap>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray' borderRadius="md"
                                 boxShadow="md">
                                <Text justifyContent='center' alignItems='center' textAlign='center' p={5}
                                      fontSize='lg'> Desenvolvimento web</Text>

                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray' borderRadius="md"
                                 boxShadow="md">
                                <Text textAlign='center' p={5} fontSize='lg'> Serviços Aws Amazon</Text>
                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray' borderRadius="md"
                                 boxShadow="md">
                                <Text textAlign='center' p={5} fontSize='lg'> Deploy da aplicação</Text>
                            </Box>
                        </Wrap>
                    </motion.div>
            </Flex>

                </PageTransition>
            </Flex>

);
};

export default About;