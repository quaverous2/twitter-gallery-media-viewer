const express = require('express');
//const Twitter = require('twit');
require('dotenv').config();
const { TwitterApi } = require("twitter-api-v2");
const app = express();

app.listen(3000, () => console.log('Server running'))

const twitterClient = new TwitterApi({
    appKey: process.env.APPKEY,
    appSecret: process.env.APPSECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESSSECRET
});

app.get('/getUser', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    twitterClient.v1.user({ screen_name: 'BarackObama' }).then(x => {
        console.log(x);
        console.log(x.id);
        res.json(x);
    })
});