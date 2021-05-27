//======================================================================================
//Imports===============================================================================
//======================================================================================
const express = require('express');
const fs = require('fs');
var md5 = require('md5');

let surveyData = require('../data/SurveyData.json');

//======================================================================================
//Configuration=========================================================================
//======================================================================================
const surveyRouter = express.Router();
const URL = '/survey'

//======================================================================================
//Endpoints=========================================================================
//======================================================================================
surveyRouter.get(URL,(req,res) => {
    res.json(surveyData);
});

surveyRouter.post(`${URL}`, (req,res) => {
    try {
        createSurvey(req);
    } catch (error) {
        res.send(error);
    }

    res.send('Success')
});

function createSurvey(req) {
    const surveyDataAux = surveyData;
    const newSurvey = {
        id: md5(`${req.body.name}${Date.now()}`),
        name:req.body.name
    }
    surveyDataAux.push(newSurvey);

    fs.writeFile('./src/data/SurveyData.json',
        JSON.stringify(surveyDataAux),
        (err) => {
            if(err){
                throw err;
            }
        }
    );
}

module.exports = surveyRouter;