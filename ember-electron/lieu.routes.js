module.exports = (app) => {
    const lieux = require('./lieu.controller.js');

    // Create a new lieu
    app.post('/lieux', lieux.create);

    // Retrieve all lieux
    app.get('/lieux', lieux.findAll);

    // Retrieve a single lieu with lieuId
    app.get('/lieux/:lieuId', lieux.findOne);

    // Update a Note with lieuId
    app.put('/lieux/:lieuId', lieux.update);

    // Delete a Note with lieuId
    app.delete('/lieux/:lieuId', lieux.delete);
}
