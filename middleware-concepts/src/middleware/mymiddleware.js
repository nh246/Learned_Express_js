// middleware structure
const myMiddleware = (req, res, next) => {
    console.log("Middleware is executed!")
    next()
}

module.exports = myMiddleware