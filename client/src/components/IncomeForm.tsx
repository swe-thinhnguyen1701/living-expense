import { useState } from "react";
import { Flex, FormControl, FormErrorMessage, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";


const IncomeForm = () => {
    const [showErrorMessage, setShowErrorMessage] = useState(0);
    const ERROR_MESSAGES = ["", "Only accept numbers", "Amount cannot exceed 999,999.99"]
    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(Number(e.target.value)) || e.target.value.includes(" ")) {
            e.target.value = e.target.value.slice(0, -1);
            setShowErrorMessage(1);
            return;
        }
        if(e.target.value.includes(".")){
            const splitValue = e.target.value.split(".");
            if(splitValue[1].length > 2){
                e.target.value = e.target.value.slice(0, -1);
                setShowErrorMessage(1);
                return;
            }
        }
        if(e.target.value.length > 6 && !e.target.value.includes(".")){
            e.target.value = e.target.value.slice(0, -1);
            setShowErrorMessage(2);
            return;
        }
        setShowErrorMessage(0);
    }
    
    return (
        <form>
            <Flex gap={4} padding={4}>
                <FormControl isInvalid={showErrorMessage === 0 ? false : true} width="200px">
                    <InputGroup>
                        <InputLeftAddon>$</InputLeftAddon>
                        <Input
                            placeholder="Amount"
                            maxLength={9}
                            onChange={inputOnChange} />
                    </InputGroup>
                    {showErrorMessage !== 0 &&
                        <FormErrorMessage>
                            {ERROR_MESSAGES[showErrorMessage]}
                        </FormErrorMessage>}
                </FormControl>
                <InputGroup>
                    <Input placeholder="Description" />
                </InputGroup>
            </Flex>
        </form>
    )
}

export default IncomeForm;