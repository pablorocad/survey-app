//======================================================================================
//Imports===============================================================================
//======================================================================================
const express = require('express');
const surveyRouter = require('./routes/SurveyRouter');

//======================================================================================
//Configuration=========================================================================
//======================================================================================
const app = express();
const PORT = 3000;

app.set('port',PORT);

app.get('/',(req,res) => {
    res.send('Server Running');
})

app.use(surveyRouter);

app.listen(PORT, () => {
    console.log(`Survey app listening on port: ${app.get('port')}`);
});