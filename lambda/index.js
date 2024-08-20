const express = require('express');
const app = express();

app.use(express.json());

const bookingsPathNoRouteParams = "/clientbookings";
const bookingsPathWithRouteParams = "/clientbookings/:bookingid";

app.post( bookingsPathNoRouteParams, (req,res) => {

    res.status.json({ message : 'Hello from Lambda' });

})

app.patch( bookingsPathNoRouteParams, (req,res) => {

    res.status.json({ message : 'Hello from Lambda' });

})

module.exports.handler = serverless(app);