import { Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoImg from "../../public/living-expense-logo.webp";

const Logo = () => {
    return (
        <Link to="/" className="logo">
            <VStack gap={0}>
                <Image maxWidth={{base: "40px", md: "50px", xl: "60px"}} src={logoImg} alt="logo" />
                <Text fontSize={{base: "1.1rem", lg: "1.3rem", xl: "1.42rem"}} fontWeight="bold">Living Expense</Text>
            </VStack>
        </Link>
    )
}

export default Logo;