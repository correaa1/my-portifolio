import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedBox = motion(Box);

const PortfolioItem = ({ title }) => {
    return (
        <AnimatedBox
            borderRadius="md"
            boxShadow="md"
            bg='gray'
            m={2}
            p={10}
            w={400}
            h={200}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Text textAlign='center' p={10} fontSize='2xl'>{title}</Text>
        </AnimatedBox>
    );
};

export default PortfolioItem;
