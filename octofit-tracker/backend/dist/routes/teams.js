"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const team_1 = require("../models/team");
const teamsRouter = (0, express_1.Router)();
teamsRouter.get('/', async (_request, response) => {
    const teams = await team_1.Team.find().sort({ createdAt: 1 }).lean();
    response.json({
        count: teams.length,
        endpoint: '/api/teams/',
        items: teams,
        service: 'teams',
        status: 'ok',
    });
});
exports.default = teamsRouter;
