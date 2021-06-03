//======================================================================================
//Imports===============================================================================
//======================================================================================
const express = require('express');
const fs = require('fs');
var md5 = require('md5');
const fetch = require('node-fetch')

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

/*
survey:
{
    name:''
    questions:[]
}

question:
{
    question:'',
    type:'',
    answers:[{answer:''},{answer:''}]
}
*/

surveyRouter.post(`${URL}`, (req,res) => {
    try {
        createSurvey(req);
    } catch (error) {
        res.send(error);
    }

    const id_survey = surveyData[surveyData.length - 1].id;

    req.body.questions.forEach(async question => {
        question.survey = id_survey;

        await fetch('http://localhost:2080/question',
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        });
    });

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