import { Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <footer>
            <Text textAlign="center">
                &copy;  {new Date().getFullYear()} Charles Nguyen. All rights reserved.
            </Text>
        </footer>
    )
}

export default Footer;