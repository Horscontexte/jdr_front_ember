const Joueur = require('./joueur.model.js');

//Create new Joueur
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Joueur content can not be empty"
        });
    }

    // Create a Joueur
    const joueur = new Joueur({
        name: req.body.name || "No joueur name",
        nation: req.body.nation,
        from: req.body.from,
        job: req.body.job,
        imgurl: req.body.imgurl,
        pm: req.body.pm,
        pv: req.body.pv,
        stats: {
          for: req.body.stats.for,
          dex: req.body.stats.dex,
          int: req.body.stats.int,
          con: req.body.stats.con,
          app: req.body.stats.app,
          pou: req.body.stats.pou,
          tai: req.body.stats.tai,
          san: req.body.stats.san,
          edu: req.body.stats.edu,
          idee: req.body.stats.idee,
          conn: req.body.stats.conn,
        },
        ecole: req.body.ecole,
        diplome: req.body.diplome,
        sm: req.body.sm,
        comp: req.body.comp,
        arme: req.body.arme,
        publish: req.body.publish,
    });

    // Save Joueur in the database
    joueur.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the joueur."
        });
    });
};

// Retrieve all Joueurs from the database.
exports.findAll = (req, res) => {
    Joueur.find()
    .then(joueurs => {
        res.send(joueurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving joueurs."
        });
    });
};

// Find a single joueur with a joueurID
exports.findOne = (req, res) => {
    Joueur.findById(req.params.joueurId)
    .then(joueur => {
        if(!joueur) {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.joueurId
            });
        }
        res.send(joueur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.joueurId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving joueur with id " + req.params.joueurId
        });
    });
};

// Update a joueur
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Joueur content can not be empty"
        });
    }

    // Find and update personage with the request body
    Joueur.findByIdAndUpdate(req.params.joueurId, {
        title: req.body.title || "No joueur title",
        description: req.body.description,
        age: req.body.age,
        imgurl: req.body.imgurl,
    }, {new: true})
    .then(joueur => {
        if(!joueur) {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.joueurId
            });
        }
        res.send(joueur);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.joueurId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.joueurId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Joueur.findByIdAndRemove(req.params.joueurId)
    .then(joueur => {
        if(!joueur) {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.joueurId
            });
        }
        res.send({message: "Joueur deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Joueur not found with id " + req.params.personageId
            });
        }
        return res.status(500).send({
            message: "Could not delete joueur with id " + req.params.joueurId
        });
    });
};
