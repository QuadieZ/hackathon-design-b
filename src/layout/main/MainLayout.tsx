import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Navbar } from "../../component";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="100vh"
    >
      <Navbar />
      <Flex overflow="hidden" maxW="1440px" w="full" display="flex" flex="1">
        <Flex flexDir="column" flex="1" px={8} position="relative" gap={6}>
          {children}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainLayout;
