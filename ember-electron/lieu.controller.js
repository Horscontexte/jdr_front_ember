const Lieu = require('./lieu.model.js');

//Create new Lieu
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Lieu content can not be empty"
        });
    }

    // Create a Lieu
    const lieu = new Lieu({
        title: req.body.title || "No lieu title",
        histoire: req.body.histoire,
        climat: req.body.climat,
        howto: req.body.howto,
        imgurl: req.body.imgurl,
        hotspot: req.body.hotspot,
        publish: req.body.publish,
    });

    // Save lieu in the database
    lieu.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the lieu."
        });
    });
};

// Retrieve all lieu from the database.
exports.findAll = (req, res) => {
    Lieu.find()
    .then(Lieux => {
        res.send(Lieux);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving lieux."
        });
    });
};

// Find a single lieu with a lieuID
exports.findOne = (req, res) => {
    Lieu.findById(req.params.lieuId)
    .then(lieu => {
        if(!lieu) {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.lieuId
            });
        }
        res.send(lieu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.lieuId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving lieu with id " + req.params.lieuId
        });
    });
};

// Update a lieu
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Lieu content can not be empty"
        });
    }

    // Find and update personage with the request body
    Lieu.findByIdAndUpdate(req.params.lieuId, {
        title: req.body.title || "No lieu title",
        description: req.body.description,
        age: req.body.age,
        imgurl: req.body.imgurl,
    }, {new: true})
    .then(lieu => {
        if(!lieu) {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.lieuId
            });
        }
        res.send(lieu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.lieuId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.lieuId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Lieu.findByIdAndRemove(req.params.lieuId)
    .then(lieu => {
        if(!lieu) {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.lieuId
            });
        }
        res.send({message: "Lieu deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Lieu not found with id " + req.params.personageId
            });
        }
        return res.status(500).send({
            message: "Could not delete lieu with id " + req.params.lieuId
        });
    });
};
