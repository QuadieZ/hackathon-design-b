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
      alignItems="flex-start"
      position="fixed"
      top={0}
      left={0}
      w="full"
      h="100vh"
    >
      <Navbar />
      <Flex w="full" display="flex" flex="1">
        <Box>Sidebar</Box>
        <Box flex="1" p={8} position="relative">
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
