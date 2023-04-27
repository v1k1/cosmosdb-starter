// lib/cosmos.js
const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

const database = client.database("TodoApp");
const container = database.container("Todos");

module.exports = { client, database, container };
