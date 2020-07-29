const { getMessage } = require("./messages");
const getValidatorError = (error, messagePath) => {
    if (!error) {
        return null;
    }

    const errorMessages = {};
    error.details.map((item) => {
        const message = item.message;
        const key = item.context.key;
        const type = item.type;
        const path = `${messagePath}.${key}.${type}`;

        const customMessage = getMessage(path);

        if (!customMessage) {
            console.log(path);
        }

        errorMessages[key] = customMessage || message;
    });

    return errorMessages;
};

module.exports = { getValidatorError, getMessage };