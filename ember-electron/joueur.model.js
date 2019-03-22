const mongoose = require('mongoose');

const JoueurSchema = mongoose.Schema({
    name: String,
    imgurl: String,
    job: String,
    nation: String,
    from: String,
    pm: Number,
    pv: Number,
    stats: {
      for: Number,
      dex: Number,
      int: Number,
      con: Number,
      app: Number,
      pou: Number,
      tai: Number,
      san: Number,
      edu: Number,
      idee: Number,
      conn: Number,

    },
    ecole: String,
    diplome: String,
    sm: Number,
    comp : Array,
    arme: String,
    publish: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('Joueurs', JoueurSchema);
