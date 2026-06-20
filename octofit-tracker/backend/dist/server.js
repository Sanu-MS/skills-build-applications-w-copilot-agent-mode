"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const port = Number(process.env.PORT ?? 8000);
function getBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
}
async function startServer() {
    await (0, database_1.connectDatabase)();
    const baseUrl = getBaseUrl();
    app_1.default.listen(port, () => {
        console.log(`OctoFit Tracker API listening at ${baseUrl} on port ${port}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start OctoFit Tracker API', error);
    process.exit(1);
});
