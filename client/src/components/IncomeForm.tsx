import { Button, Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import useIncomes from "../hooks/useIncomes";

const IncomeForm = () => {
    const { amountInput, descriptionInput, addIncome } = useIncomes();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addIncome();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex gap={4}>
                <FormControl isInvalid={amountInput.error !== "pass"} className="amount">
                    <InputGroup>
                        <InputLeftAddon>$</InputLeftAddon>
                        <Input
                            placeholder="Amount"
                            maxLength={9}
                            onChange={amountInput.onChange}
                            value={amountInput.value} />
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
            </Flex>
            <Button
                isDisabled={
                    amountInput.error !== "pass" ||
                    descriptionInput.error !== "pass" ||
                    amountInput.value === "" ||
                    descriptionInput.value === ""
                }
                type="submit"
                bg="blue.500"
                color="white">
                ADD
            </Button>
        </form>
    )
}

export default IncomeForm;