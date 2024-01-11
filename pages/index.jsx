

import {Box, Container, Flex, Icon} from "@chakra-ui/react";
import React from "react";
import Background from "@/app/components/particles";
import Header from "@/app/components/header";

function IndexPage() {
    return (
         <Flex >
          <Header/>
              <Box     >
                <Background  />
              </Box>

        </Flex>
    );
}

export default IndexPage;