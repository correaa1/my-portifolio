
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const AnimatedBox = motion(Box);

const SkillItem = ({ name, level }) => {
    return (
        <AnimatedBox

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Box
                bg="gray.800"
                borderRadius="md"
                boxShadow="md"
                m={2}
                w={250}
                h={150}
                p={10}
            >
                <Text textAlign="center" fontSize="xl" fontWeight="bold" mb={2}>
                    {name}
                </Text>
                <Text textAlign="center">{level}</Text>
            </Box>
        </AnimatedBox>
    );
};

export default SkillItem;
