"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const baseUrl_1 = require("./config/baseUrl");
const port = Number(process.env.PORT ?? 8000);
async function startServer() {
    await (0, database_1.connectDatabase)();
    app_1.default.listen(port, () => {
        console.log(`OctoFit Tracker API listening at ${(0, baseUrl_1.getBaseUrl)()}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start OctoFit Tracker API', error);
    process.exit(1);
});
