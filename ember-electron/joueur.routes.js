module.exports = (app) => {
    const joueurs = require('./joueur.controller.js');

    // Create a new joueur
    app.post('/joueurs', joueurs.create);

    // Retrieve all joueurs
    app.get('/joueurs', joueurs.findAll);

    // Retrieve a single joueur with joueurId
    app.get('/joueurs/:joueurId', joueurs.findOne);

    // Update a Note with joueurId
    app.put('/joueurs/:joueurId', joueurs.update);

    // Delete a Note with joueurId
    app.delete('/joueurs/:joueurId', joueurs.delete);
}
