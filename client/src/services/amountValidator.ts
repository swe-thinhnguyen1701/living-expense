const MESSAGES = ["pass", "Amount must be a number", "Amount cannot exceed 999,999.99", "Amount cannot be empty", "Please follow the format: #.##"];

export const amountValidator = (amount: string) => {
    if (isNaN(Number(amount)) || amount.includes(" ")) 
        return MESSAGES[1];

    if (amount.includes(".")) {
        const splitValue = amount.split(".");
        if (splitValue[1].length > 2) {
            return MESSAGES[4];
        }
    }

    if (amount.length > 6 && !amount.includes(".")) {
        return MESSAGES[2];
    }

    return MESSAGES[0];
}