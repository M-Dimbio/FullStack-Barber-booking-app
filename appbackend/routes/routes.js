const { response } = require('express')
const express = require('express')
const router = express.Router()
const appointmentTemplate = require('../models/SignUpModels')
const { google } = require('googleapis');
require('dotenv').config();

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
);

// Insert new event to Google Calendar
const insertEvent = async (event) => {

    try {
        let response = await calendar.events.insert({
            auth: auth,
            calendarId: calendarId,
            resource: event
        });

        if (response['status'] == 200 && response['statusText'] === 'OK') {
            return 1;
        } else {
            return 0;
        }
    } catch (error) {
        console.log(`Error at insertEvent --> ${error}`);
        return 0;
    }
};

router.post('/appointment', async (request, reponse) => {

    insertEvent(request.body.event)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

    const appointmentUser = new appointmentTemplate({
        fullName: request.body.fullName,
        email: request.body.email,
        date: request.body.date
    })



    appointmentUser.save()
        .then(data => {
            reponse.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

module.exports = router