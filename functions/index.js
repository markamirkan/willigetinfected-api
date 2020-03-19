const functions = require('firebase-functions');
var fs = require('fs');
const countryInfo = require('countryjs');
const { getCode, getName } = require('country-list');
const arr = require('./arr');
const cors = require('cors')({ origin: true });


exports.sample = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      res.send('Passed.');
    });
  });



var csvArr = [[]];
var country, state;

var result = {
    chance: 0,
    country: 'blank',
    state: 'blank',
    population: 0,
    confirmed: 0
};

try {
    const data = fs.readFileSync('data.csv', 'UTF-8');
    const lines = data.split(/\r?\n/);
    var count = 0;
    lines.forEach((line) => {
        var str = '';
        for (let i = 0; i < line.length; i++) {
            if (line[i] === ',') {
                csvArr[count].push(str);
                str = '';
            } else {
                str += line[i];
            }
        }
        csvArr.push([]);
        count++;
    });
} catch (err) {
    console.error(err);
}

function getConfirmed(country, state) {
    if (country == "United States of America") country = "US";
    if (country == "United Kingdom of Great Britain and Northern Ireland") country = "United Kingdom";
    var confirmed = 0;
    for (let i = 0; i < csvArr.length; i++) {
        if (String(csvArr[i][0]) === String(state) && String(csvArr[i][1]) === String(country)) {
            confirmed = csvArr[i][3];
        }
    }
    return confirmed;
}

function getChanceInfected(casesToday, days, population) {
    let chanceInfected = ((casesToday * Math.pow(1.07, days)) / population) * 100;
    if (chanceInfected >= 100) chanceInfected = 100;
    return chanceInfected;
}

function getPopCountry(startString) {
    var s = '';
    var runtheloop = true;
    for (let i = 0; i < startString.length; i++) {
        if (startString[i] === "p" && startString[i + 1] === "o" && startString[i + 2] === "p" && startString[i + 3] === "u" && startString[i + 10] === String.raw`"` && startString[i + 11] === ":") {
            var j = 12;
            while (runtheloop === true) {
                if (startString[i + j] !== ",") {
                    s += (startString[i + j]);
                    j++;
                } else {
                    runtheloop = false;
                }
            }
        }
    }
    let final = parseInt(s);
    return final;
}

function returnPop(country, state) {
    let startString = String(JSON.stringify(countryInfo.info(getCode(country))));
    var population;
    if (state === "blank") {
        population = getPopCountry(startString);
    } else if (state !== "blank") {
        population = arr.getPopulation(state, country);
    }
    return population;
}

exports.getChanceInfected = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        country = request.query.country;
        state = request.query.state;
        days = parseInt(request.query.days);
        if (state == undefined || state == 'blank') {
            state = "blank";
        }
        result.country = country;
        result.state = state;
        if (result.state == 'blank') delete result.state;
        result.population = returnPop(country, state);
        result.confirmed = getConfirmed(country, state);
        result.chance = getChanceInfected(getConfirmed(country, state), days, returnPop(country, state));
        response.send(JSON.stringify(result));
    });
});