import { useState } from "react";
import useInput from "./useInput";
import { amountValidator } from "../services/amountValidator";
import { textValidator } from "../services/textValidator";
import { Expense } from "../types/Expense";

const useExpenses = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [note, setNote] = useState<string | null>(null);

    const amountInput = useInput(amountValidator);
    const descriptionInput = useInput(textValidator);
    const categoryInput = useInput(textValidator);

    const validateAll = () => {
        const isAmountValid = amountInput.validate() === "pass";
        const isDescriptionValid = descriptionInput.validate() === "pass";
        const isCategoryValid = categoryInput.validate() === "pass";
        return isAmountValid && isDescriptionValid && isCategoryValid;
    }

    const addExpense = () => {
        if (validateAll()) {
            const newExpense: Expense = {
                amount: amountInput.value,
                description: descriptionInput.value,
                category: categoryInput.value,
                date: Date.now().toLocaleString(),
                note: note
            };
    
            setExpenses((prev) => [...prev, newExpense]);
            amountInput.reset();
            descriptionInput.reset();
            categoryInput.reset();
            setNote(null);
        }

    };
    
    return {
        expenses,
        amountInput,
        descriptionInput,
        categoryInput,
        note,
        setNote,
        addExpense
    }
}

export default useExpenses;