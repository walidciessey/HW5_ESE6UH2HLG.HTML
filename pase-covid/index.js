const express = require('express');
const cors = require('cors');

const Case = require('./database');
require('./runner');

const app = express();

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
	const country = req.query.country;
	const date = req.query.date;

	if (country && date) {
		Case.find({ Country: country, Date: date }, (err, docs) => {
			if (err) {
				return res.send().status(400);
			}
			return res.json(docs).status(200);
		});
	} else if (country) {
		Case.find({ Country: country }, (err, docs) => {
			if (err) {
				return res.send().status(400);
			}
			return res.json(docs).status(200);
		});
	} else if (date) {
		Case.find({ Date: date }, (err, docs) => {
			if (err) {
				return res.send().status(400);
			}
			return res.json(docs).status(200);
		});
	} else {
		Case.find((err, docs) => {
			if (err) {
				return res.send().status(400);
			}
			return res.json(docs).status(200);
		});
	}
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server up and running....');
});
