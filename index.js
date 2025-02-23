require("dotenv").config();
const client = require("./client/api");
const loadCommands = require("./components/commands");
const loadSlashCommands = require("./components/slashCommands");
const loadEvents = require("./components/events");
const refreshSlashCommands = require("./plugins/slashCommand");
const connectToDatabase = require("./plugins/slashCommand");
const eventHandler = require("./events/eventHandler");

loadCommands(client);
loadSlashCommands(client);
loadEvents(client);
eventHandler.execute(client);
refreshSlashCommands(client);
connectToDatabase();

client.login(process.env.TOKEN);

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
