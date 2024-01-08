import React from 'react';
import {Box, Container, Flex, Grid, Text, Wrap} from "@chakra-ui/react";
import Header from "@/app/components/header";
import SkillItem from "@/app/components/skillItems";
import { motion } from 'framer-motion';
import PageTransition from "@/app/components/pageTransition";
import PortfolioItem from "@/app/components/boxMotion";

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
const portfolioItems = [
    { title: 'Autism Project' },
    { title: 'Ahlib' },
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
                    <Wrap mx={20} >
                          {portfolioItems.map((item, index) => (
                            <PortfolioItem key={index} title={item.title}/>
                        ))}
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