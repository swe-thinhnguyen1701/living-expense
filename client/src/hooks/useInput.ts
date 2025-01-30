import { useState } from "react";

type Validator = (val: string) => string;

const useInput = (validator: Validator, initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("pass");

    const validate = () => {
        const res = validator(value);
        setError(res);
        return res;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        const res = validator(newVal);

        setValue(newVal);
        setError(res);
    };

    const reset = () => {
        setValue("");
        setError("pass");
    };

    return {
        value,
        setValue,
        error,
        onChange,
        validate,
        reset
    }
}

export default useInput;