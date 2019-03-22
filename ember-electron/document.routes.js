module.exports = (app) => {
    const documents = require('./document.controller.js');

    // Create a new document
    app.post('/documents', documents.create);

    // Retrieve all documents
    app.get('/documents', documents.findAll);

    // Retrieve a single document with documentId
    app.get('/documents/:documentId', documents.findOne);

    // Update a Note with documentId
    app.put('/documents/:documentId', documents.update);

    // Delete a Note with documentId
    app.delete('/documents/:documentId', documents.delete);
}
