const logger = require("./logger")

const errorHandler = (err, req, res, next) => {
    logger.error(`${err.statusCode || 500} - ${err.message} - ${req.orginalUrl}`);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server"
    })
}

module.exports = errorHandler