import React from 'react';
import {Box, Button, Container, Flex, Grid, Image, Text, Wrap} from "@chakra-ui/react";
import Header from "@/app/components/header";
import SkillItem from "@/app/components/skillItems";
import PageTransition from "@/app/components/pageTransition";
import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedBox = motion(Box);

const skills = [
    { name: 'React', level: 'Avançado' },
    { name: 'JavaScript', level: 'Intermediario' },
    { name: 'Nextjs', level: 'Avançado' },
    { name: 'Nodejs', level: 'Intermediario' },
    { name: 'React Native', level: 'Intermediario' },
        { name: 'Expo', level: 'Intermediario' },
    { name: 'MySql', level: 'Avançado' },
];

const library = [
    { name: 'React Hook', level: 'Avançado' },
    { name: 'Chakra Ui', level: 'Avançado' },
    { name: 'FrameMotion', level: 'Intermediario' },
    { name: 'Tailwind', level: 'Intermediario' },
    { name: 'Axios', level: 'Avançado' },
    { name: 'I18n', level: 'Avançado' },
    { name: 'Jscookie', level: 'Basico' },
    { name: 'react three fiber', level: 'Basico' },
];


const Portfolio = () => {

    return (
    <Flex >
        <Header/>
    <PageTransition>
        <Flex bg='#131325' pt={20} justifyItems='center' flexDirection='column'>
            <Text p={20} fontSize='4xl'>Portfólio</Text>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 20}}
                    transition={{duration: 0.5}}
                >
                    <Wrap  mx={20} >
                        <AnimatedBox  whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}  >
                            <Text fontSize='2xl' textAlign='center' pb={5}>Autism Project</Text>
                         <Link href='https://github.com/correaa1/AutismProject' target='_blank'>
                             <Image backgroundColor='gray.500' p={10} border='1px solid gray' borderRadius={10} h={300} w={400}  src='/Autism.png'/>
                         </Link>

                        </AnimatedBox>
                         <AnimatedBox  whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} mx={20}  >
                            <Text fontSize='2xl' textAlign='center' pb={5}>Ahlib Mobile</Text>
                        <Link href='https://github.com/AhgoraLabs/AhLib-mobile' target='_blank'>    <Image  h={300} w={400}  src='/ahlib.png'/></Link>

                        </AnimatedBox>
                    </Wrap>




                <Text p={20} fontSize='4xl'>Minhas habilidades</Text>
                <Wrap mx={20} display="flex">
                    {skills.map((skill, index) => (
                        <SkillItem key={index} {...skill} />
                    ))}
                </Wrap>



                <Text p={20} fontSize='4xl'>Experiencias tecnologias</Text>
                <Wrap mx={20} display="flex">
                    {library.map((library, index) => (
                        <SkillItem key={index} {...library} />
                    ))}
                </Wrap>
                </motion.div>

        </Flex>
</PageTransition>
    </Flex>
    );
};

export default Portfolio;