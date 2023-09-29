const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute.js');
const nivels = require('./nivelsRoute.js');
const turmas = require('./turmasRoute.js');

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        nivels,
        turmas
    );
}