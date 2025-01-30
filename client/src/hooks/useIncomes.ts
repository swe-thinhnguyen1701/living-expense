import { useState } from "react";
import useInput from "./useInput";
import { amountValidator } from "../services/amountValidator";
import { textValidator } from "../services/textValidator";
import { Income } from "../types/Income";

const useIncomes = () => {
    const [incomes, setIncomes] = useState<Income[]>([]);

    const amountInput = useInput(amountValidator);
    const descriptionInput = useInput(textValidator);

    const validateAll = () => {
        const isAmountValid = amountInput.validate() === "pass";
        const isDescriptionValid = descriptionInput.validate() === "pass";
        return isAmountValid && isDescriptionValid;
    }

    const addIncome = () => {
        if (validateAll()) {
            const newIncome: Income = {
                amount: amountInput.value,
                description: descriptionInput.value
            };
    
            setIncomes((prev) => [...prev, newIncome]);
            amountInput.reset();
            descriptionInput.reset();
        }

    };

    return {
        incomes,
        amountInput,
        descriptionInput,
        addIncome
    }
}

export default useIncomes;