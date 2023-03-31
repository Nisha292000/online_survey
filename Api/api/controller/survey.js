const express = require('express');
const router = express.Router();
const surveyModel = require('../models/surveySchema');
const encryptResponse = require('../_helpers/encrypt-response');
const status = require('../_helpers/status.config');

router.post("/", async (req, res) => {
    try{
        const survey = await new surveyModel(req.body);
        const result = await survey.save();
        return encryptResponse(res, status.OK, 200, result);
    }
    catch(error){
        return encryptResponse(res, status.UNEXPECTED_ERROR, 500);
    }
});

  
module.exports = router;