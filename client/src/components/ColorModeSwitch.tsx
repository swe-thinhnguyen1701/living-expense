import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeScript = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={useColorMode().colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            position="absolute"
            top={4}
            right={4}
        />
    )
}

export default ColorModeScript;