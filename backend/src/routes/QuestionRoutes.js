//======================================================================================
//Imports===============================================================================
//======================================================================================
const express = require('express');
const fs = require('fs');
var md5 = require('md5');

let questionData = require('../data/QuestionData.json');

//======================================================================================
//Configuration=========================================================================
//======================================================================================
const questionRouter = express.Router();
const URL = '/question'

//======================================================================================
//Endpoints=========================================================================
//======================================================================================
questionRouter.get(URL,(req,res) => {
    res.json(questionData);
});

questionRouter.post(`${URL}`, (req,res) => {
    const questionDataAux = questionData;
    const newQuestion = {
        id: md5(`${Date.now()}`),
        question:req.body.question,
        type: req.body.type,
        answers: req.body.answers,
        survey: req.body.survey
    };

    questionDataAux.push(newQuestion);

    fs.writeFile('./src/data/QuestionData.json',
        JSON.stringify(questionDataAux),
        (err) => {
            if(err){
                throw err;
            }
            res.send("success")
        }
    );
});

module.exports = questionRouter;