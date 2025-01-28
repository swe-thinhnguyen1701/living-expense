import { FormControl, Input, InputGroup, InputLeftAddon, Textarea } from "@chakra-ui/react";

const ExpenseForm = () => {
    return (
        <form>
            <FormControl className="amount">
                <InputGroup>
                    <InputLeftAddon>$</InputLeftAddon>
                    <Input 
                    placeholder="Amount"
                    maxLength={9} />
                </InputGroup>
            </FormControl>
            <InputGroup>
                <Input placeholder="Description" />
            </InputGroup>
            <InputGroup>
                <Input placeholder="Category" />
            </InputGroup>
            <InputGroup>
                <Textarea placeholder="Notes" />
            </InputGroup>
        </form>
    )
}

export default ExpenseForm;