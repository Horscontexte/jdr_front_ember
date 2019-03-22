const Personnage = require('./personnage.model.js');

//Create new Personnage
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Personnage content can not be empty"
        });
    }

    // Create a Personnage
    const personnage = new Personnage({
        title: req.body.title || "No personnage title",
        description: req.body.description,
        age: req.body.age,
        job: req.body.job,
        imgurl: req.body.imgurl,
        stats: {
          app: req.body.stats.app,
          con: req.body.stats.con,
          dex: req.body.stats.dex,
          for: req.body.stats.for,
          tai: req.body.stats.tai,
          edu: req.body.stats.edu,
          int: req.body.stats.int,
          pou: req.body.stats.pou,
        },
        comp: req.body.comp,
        langue: req.body.langue,
        publish: req.body.publish,
    });

    // Save Personnage in the database
    personnage.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the personnage."
        });
    });
};

// Retrieve all Personnages from the database.
exports.findAll = (req, res) => {
    Personnage.find()
    .then(personnages => {
        res.send(personnages);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving personnages."
        });
    });
};

// Find a single personnage with a personnageID
exports.findOne = (req, res) => {
    Personnage.findById(req.params.personnageId)
    .then(personnage => {
        if(!personnage) {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personnageId
            });
        }
        res.send(personnage);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personnageId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving personnage with id " + req.params.personnageId
        });
    });
};

// Update a personnage
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Personnage content can not be empty"
        });
    }

    // Find and update personage with the request body
    Personnage.findByIdAndUpdate(req.params.personnageId, {
        title: req.body.title || "No personnage title",
        description: req.body.description,
        age: req.body.age,
        imgurl: req.body.imgurl,
        publish: req.body.publish,
    }, {new: true})
    .then(personnage => {
        if(!personnage) {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personnageId
            });
        }
        res.send(personnage);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personnageId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.personnageId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Personnage.findByIdAndRemove(req.params.personnageId)
    .then(personnage => {
        if(!personnage) {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personnageId
            });
        }
        res.send({message: "Personnage deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Personnage not found with id " + req.params.personageId
            });
        }
        return res.status(500).send({
            message: "Could not delete personnage with id " + req.params.personnageId
        });
    });
};
