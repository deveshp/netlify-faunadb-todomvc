"use strict";

var faunadb = require("faunadb");

function handler(event, context, callback) {
  isNaN(faunadb);
  var payload = JSON.parse(event.body);
  var user = payload.user;
  console.log("Netlify user " + JSON.stringify(user) + " process.env FAUNADB_SERVER_SECRET " + JSON.stringify(process.env));
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { test: "surely too" } })
  });
}
module.exports = {handler: handler};
