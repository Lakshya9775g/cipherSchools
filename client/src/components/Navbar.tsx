import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  BellIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from "../images/logo.png";
import trans from "../images/trans_logo.png";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <img width={"60rem"} src={logo} />
              <h1 style={{ fontSize: "2rem", fontWeight: "bolder" }}>
                CipherSchools
              </h1>
            </Box>
            <Select
              width={"10rem"}
              placeholder="Select option"
              textAlign={"center"}
              outline={"none"}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <InputGroup width={"30rem"}>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={Search2Icon} color="gray.300" />}
              />
              <Input
                placeholder="Search and Learn"
                borderRadius="full"
                // bg="black"
                boxShadow="md"
                css={{
                  "&:focus": {
                    borderColor: "black.300",
                    boxShadow: "0 0 0 2px rgba(70, 130, 180, 0.4)",
                  },
                }}
              ></Input>
            </InputGroup>

            <Icon as={NotificationsNoneIcon} boxSize={6} width={"2rem"} />

            <img width={"25rem"} src={trans} />

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>

                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </div>
        </Flex>
      </Box>
    </>
  );
}
