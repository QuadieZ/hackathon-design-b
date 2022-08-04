import { Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      h="59px"
      alignSelf="stretch"
      bgColor="white"
      boxShadow="0px 1px 2px #98a3b388"
    >
      <Flex
        flex={1}
        maxW="1440px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex id="sidebar">
          <Image
            src={`${process.env.PUBLIC_URL}/images/common/logo.svg`}
            alt="logo"
          />
        </Flex>
        <Flex id="container"></Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
