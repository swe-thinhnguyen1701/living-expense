export const textValidator = (text: string) => {
    const MESSAGE = ["pass", "Description cannot be empty", "Text must be between 5 and 100 characters"];

    if (!text) return MESSAGE[1];

    const validateText = text.trim();
    if (validateText.length === 0) return MESSAGE[1];
    if (validateText.length < 5 || validateText.length > 100) return MESSAGE[2];

    return MESSAGE[0];
}