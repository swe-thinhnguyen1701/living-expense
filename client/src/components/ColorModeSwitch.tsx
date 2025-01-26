import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeScript = () => {
    const {toggleColorMode} = useColorMode();

    return (
        <HStack>
            <Switch colorScheme="green" isChecked={useColorMode().colorMode === "dark"} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeScript;