const Document = require('./document.model.js');

//Create new Document
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Document content can not be empty"
        });
    }

    // Create a Document
    const document = new Document({
        title: req.body.title || "No document title",
        description: req.body.description,
        found: req.body.found,
        publish: req.body.publish,
        imgurl: req.body.imgurl,
    });

    // Save Document in the database
    document.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the document."
        });
    });
};

// Retrieve all Documents from the database.
exports.findAll = (req, res) => {
    Document.find()
    .then(documents => {
        res.send(documents);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving documents."
        });
    });
};

// Find a single document with a documentID
exports.findOne = (req, res) => {
    Document.findById(req.params.documentId)
    .then(document => {
        if(!document) {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        res.send(document);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving document with id " + req.params.documentId
        });
    });
};

// Update a document
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Document content can not be empty"
        });
    }

    // Find and update personage with the request body
    Document.findByIdAndUpdate(req.params.documentId, {
        title: req.body.title || "No document title",
        description: req.body.description,
        age: req.body.age,
        imgurl: req.body.imgurl,
    }, {new: true})
    .then(document => {
        if(!document) {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        res.send(document);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.documentId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Document.findByIdAndRemove(req.params.documentId)
    .then(document => {
        if(!document) {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        res.send({message: "Document deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Document not found with id " + req.params.personageId
            });
        }
        return res.status(500).send({
            message: "Could not delete document with id " + req.params.documentId
        });
    });
};
