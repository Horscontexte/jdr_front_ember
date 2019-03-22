const mongoose = require('mongoose');

const PersonnageSchema = mongoose.Schema({
    title: String,
    description: String,
    age: Number,
    job: String,
    imgurl: String,
    stats: {
      app: Number,
      con: Number,
      dex: Number,
      for: Number,
      tai: Number,
      edu: Number,
      int: Number,
      pou: Number,
    },
    comp: String,
    langue: String,
    publish: Boolean,
}, {
    timestamps: true
});

module.exports = mongoose.model('Personnages', PersonnageSchema);
