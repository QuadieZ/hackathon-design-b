import { SearchIcon, SmallCloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { CartItemIcon } from "../icons/components/CartItemIcon";

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
      px={12}
    >
      <Flex
        flex={1}
        maxW="1440px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={12}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/common/sports.svg`}
            alt="logo"
          />
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="#98A3B3" />}
            />
            <Input
              placeholder="Search"
              color="#98A3B3"
              fontSize="14px"
              borderColor="#98A3B3"
              borderRadius="2px"
              width="370px"
            />
            <InputRightElement
              pointerEvents="none"
              children={<SmallCloseIcon color="#98A3B3" />}
            />
          </InputGroup>
        </Flex>
        <Flex align="center" gap={5}>
          <Image
            src={`${process.env.PUBLIC_URL}/images/common/fill.png`}
            alt="logo"
            boxSize="24px"
            cursor="pointer"
          />
          <CartItemIcon boxSize="24px" cursor="pointer" />
          <Flex align="center" gap={2} cursor="pointer">
            <Text>Account</Text>
            <ChevronDownIcon />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
