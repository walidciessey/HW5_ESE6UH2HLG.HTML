const csv = require('fast-csv');
const request = require('request');

function createStreamReader(url, countries, model) {
	const cases = [];
	csv.parseStream(request(url))
		.on('data', (row) => {
			if (countries.includes(row[3])) {
				cases.push({
					Country: row[3],
					Confirmed: row[7],
					Deaths: row[8],
					Recoveries: row[9],
					Active: row[10],
					Date: row[4].split(' ')[0],
				});
			}
		})
		.on('end', () => {
			console.log('CSV file successfully processed');
			model.insertMany(cases, () => {});
		});
}

module.exports = createStreamReader;
