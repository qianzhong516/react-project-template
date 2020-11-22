const logger = require('./logger')

const requestLogger = (req, res, next) => {
    logger.info('-----------------------------------------')
    logger.info('Method: ', req.method)
    logger.info('Path:  ', req.path)
    if( req.method !== "GET" ){
        logger.info('Body:  ', req.body)
    }
    logger.info('-----------------------------------------')
    next()
}

const errorMiddleware = (err, req, res, next) => {
    // we must delegate to the default Express error handler,
    // when the header has been already sent
    if(err.headersSent){
        next(err)
    }

    res.status(500)
    logger.info('-----------------------------------------')
    logger.error('error: ', err)
    logger.info('-----------------------------------------')
}

module.exports = {requestLogger, errorMiddleware}