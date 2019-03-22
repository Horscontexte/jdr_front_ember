module.exports = (app) => {
    const personnages = require('./personnage.controller.js');

    // Create a new personnage
    app.post('/personnages', personnages.create);

    // Retrieve all personnages
    app.get('/personnages', personnages.findAll);

    // Retrieve a single personnage with personnageId
    app.get('/personnages/:personnageId', personnages.findOne);

    // Update a Note with personnageId
    app.put('/personnages/:personnageId', personnages.update);

    // Delete a Note with personnageId
    app.delete('/personnages/:personnageId', personnages.delete);
}
