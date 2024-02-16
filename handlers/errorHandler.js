//handles the development time and production time errors//
const errorHandler = (err, req, res, next) => {
    console.log('Error is handled');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({message: err.message, stack: process.env.NODE_ENV === "development" ? err.stack: null});
    next();
}

module.exports = errorHandler