import { Box, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" alignItems="center" padding={4}>
            <Box>
                <Logo />
            </Box>
            <Box>
                <ColorModeSwitch />
            </Box>
        </HStack>
    )
}

export default NavBar;