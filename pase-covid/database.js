const mongoose = require('mongoose');

const uri =
	'mongodb+srv://wayne:V7jofmk0SC3Iv034@cluster0-360zx.gcp.mongodb.net/PaseCovid?retryWrites=true&w=majority';

mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const schema = mongoose.Schema({
	Country: String,
	Active: Number,
	Deaths: Number,
	Recoveries: Number,
	Confirmed: Number,
	Date: String,
});

const Case = mongoose.model('Case', schema);

module.exports = Case;
