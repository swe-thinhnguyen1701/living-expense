import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import livingExpenseImg from '../assets/living-expense-img.png';

const Home = () => {
    return (
        <VStack justifyContent="center" className="page">
            <Image src={livingExpenseImg} width={{md: "400px"}} alt="Living Expense image" />
            <Heading as="h1" fontSize="5xl">Living Expense</Heading>
            <Text>Take control of your finances with ease. Track your income, expenses, and savings all in one place. Simple, secure, and stress-free.</Text>
        </VStack>
    )
}

export default Home;