import { Button, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";
import useExpenses from "../hooks/useExpenses";

const ExpenseForm = () => {
    const { amountInput, descriptionInput, categoryInput, addExpense, noteRef } = useExpenses();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addExpense();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex gap={4} marginBottom={5}>
                <FormControl isInvalid={amountInput.error !== "pass"} className="amount">
                    <InputGroup>
                        <InputLeftAddon>$</InputLeftAddon>
                        <Input
                            placeholder="Amount"
                            maxLength={9}
                            onChange={amountInput.onChange}
                            value = {amountInput.value} />
                    </InputGroup>
                    <FormErrorMessage>
                        {amountInput.error}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={descriptionInput.error !== "pass"}>
                    <InputGroup>
                        <Input
                            placeholder="Description"
                            maxLength={100}
                            onChange={descriptionInput.onChange}
                            value={descriptionInput.value} />
                    </InputGroup>
                    <FormErrorMessage>
                        {descriptionInput.error}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={categoryInput.error !== "pass"}>
                    <InputGroup>
                        <Input
                            placeholder="Category"
                            maxLength={100}
                            onChange={categoryInput.onChange}
                            value={categoryInput.value} />
                    </InputGroup>
                    <FormErrorMessage>
                        {categoryInput.error}
                    </FormErrorMessage>
                </FormControl>
            </Flex>
            <InputGroup>
                <Textarea placeholder="Notes" ref={noteRef}/>
            </InputGroup>
            <Button type="submit" bg="blue.500" color="white">
                ADD
            </Button>
        </form>
    )
}

export default ExpenseForm;