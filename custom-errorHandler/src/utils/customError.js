// reausable class for error


class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor) //  fro debugging 
    }
}


module.exports = CustomError