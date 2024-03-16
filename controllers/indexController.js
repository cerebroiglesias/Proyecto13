const path = require('path');

const home = (req, res) => {
    //return index.html in public folder outside controller folder
    res.sendFile(path.resolve('./public/index.html'));
}

const guardar = (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
}

module.exports = {
    home,
    guardar
}