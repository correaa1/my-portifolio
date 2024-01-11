import React from 'react';
import Header from "@/app/components/header";
import {
    Box,
    Flex,
    Grid,
    Text,
    Image,
    Wrap,
    Button,
    Tabs,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Center
} from "@chakra-ui/react";
import PageTransition from "@/app/components/pageTransition";

import { motion } from 'framer-motion';
const About = () => {
    const handleDownload = (pdfPath, fileName) => {
        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = fileName;

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    };
    return (

            <Flex   flexDirection={{base:'column', md:'row'}}>
            <Header />
                <PageTransition>
            <Flex minH={'100vh'}  bg='#131325' flexDirection='column' ps={20} w={1500} >
                        <Text   fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}  p={10} >
                    Sobre mim
                        </Text>
                < Flex flexDirection='row'   >
                    <Image rounded={10} h={350} w={450} src='/my.jpg' />
                    <Grid>
                        <Text  fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}  p={10} >
                          Meu nome é Bruno Correa, gosto muito de tecnologia e busco sempre estar aprendendo e inovando cada vez mais.
                        </Text>
                        <Text  fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} p={10}>
                         Apaixonado pelo ecossistema React/Next.js e venho buscando trabalhar com essas tecnologias frequentemente
                        </Text>
                     </Grid>
                </Flex>
             <Center>
                 <Tabs  m={20}>
                  <TabList>
                     <Tab fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}>Download curriculo </Tab>
                      <Tab fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}>Gradução</Tab>
                      <Tab fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}>Certificados</Tab>
                  </TabList>

                    <TabPanels >
                        <TabPanel>
                            <Button fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} color='white' bg='gray.700' _hover={{bg:'gray.600'}}
                                    onClick={() => handleDownload('/Curriculo2023Att.pdf', 'Curriculo2023Att.pdf')} >
                                Currículo pdf
                            </Button>
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}>Curso de sistemas de informação Completo</Text>
                        </TabPanel>
                        <TabPanel display='flex' flexDirection='column'>
                            <Button fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} color='white' bg='gray.700' _hover={{bg:'gray.600'}}
                                    onClick={() => handleDownload('/certificadoSql.pdf', 'certificadoSql.pdf')} >
                                 Banco de dados e SQL
                            </Button>
                            <Button fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} mt={5} color='white' bg='gray.700' _hover={{bg:'gray.600'}}
                                    onClick={() => handleDownload('/reactNative.pdf', 'reactNative.pdf')} >
                                React Native
                            </Button>
                            <Button fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} mt={5} color='white' bg='gray.700' _hover={{bg:'gray.600'}}
                                    onClick={() => handleDownload('/Node-Ts-Mongodb.pdf', 'Node-Ts-Mongodb.pdf')} >
                              Nodejs | Typescript | Mongo
                            </Button>
                            <Button fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}   mt={5} color='white' bg='gray.700' _hover={{bg:'gray.600'}}
                                    onClick={() => handleDownload('/reactNative-Ts.pdf', 'reactNative-Ts.pdf')} >
                                React Native e Typescript
                            </Button>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
             </Center>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                    >
                        <Box pt={20}>
                        <Text  fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }} p={10}>
                            Serviços que ofereço
                        </Text>
                    </Box>
                        <Wrap m={20}>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray.800' borderRadius="md"
                                 boxShadow="md">
                                <Text justifyContent='center' alignItems='center' textAlign='center' p={5}
                                      fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}> Desenvolvimento web</Text>

                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray.800' borderRadius="md"
                                 boxShadow="md">
                                <Text textAlign='center' p={5} fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}> Serviços Aws Amazon</Text>
                            </Box>
                            <Box display='flex' justifyContent='center' alignItems='center' m={5} w={350} h={150}
                                 bg='gray.800' borderRadius="md"
                                 boxShadow="md">
                                <Text textAlign='center' p={5} fontSize={{ base: '4xl', md: 'lg', lg: 'lg' }}> Deploy da aplicação</Text>
                            </Box>
                        </Wrap>
                    </motion.div>
            </Flex>

                </PageTransition>
            </Flex>

);
};

export default About;