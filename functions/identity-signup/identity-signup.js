"use strict";

var faunadb = require("faunadb");

function handler(event, context, callback) {
  isNaN(faunadb);
  var payload = JSON.parse(event.body);
  var user = payload.user;
  console.log("Netlify user " + user + " FAUNADB_SERVER_SECRET " + process.env.FAUNADB_SERVER_SECRET);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { test: "surely" } })
  });
}
module.exports = {handler: handler};
