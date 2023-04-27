// lib/cosmos.js
const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOSDB_CONNECTION_STRING);

const database = client.database("people");
const container = database.container("people");

module.exports = { client, database, container };
