import { Heading, Flex, Image, Text, VStack } from '@chakra-ui/react';
import livingExpenseImg from '../assets/living-expense-img.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <VStack justifyContent="center" className="page">
            <Image src={livingExpenseImg} width={{ md: "400px", lg: "550px" }} alt="Living Expense image" className="home-image" />
            <VStack className="home-content active">
                <Heading as="h1" fontSize={{ base: "3.815rem", lg: "5.61rem" }} marginBottom={8}>Living Expense</Heading>
                <Text fontSize={{ md: "1.4rem", xl: "1.47rem" }} textAlign="center">Take control of your finances with ease. Track your income, expenses, and savings all in one place. Simple, secure, and stress-free.</Text>
                <Flex gap={8} flexDir={{base: "column", md: "row"}} marginTop="50px">
                    <Link to="/dashboard" className="get-start">Start Tracking Now</Link>
                    <Link to="/account" className="get-start">Log in/Sign up</Link>
                </Flex>
            </VStack>
        </VStack>
    )
}

export default Home;