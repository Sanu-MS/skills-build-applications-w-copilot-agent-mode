"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_entry_1 = require("../models/leaderboard-entry");
const leaderboardRouter = (0, express_1.Router)();
leaderboardRouter.get('/', async (_request, response) => {
    const entries = await leaderboard_entry_1.LeaderboardEntry.find().sort({ rank: 1 }).lean();
    response.json({
        count: entries.length,
        endpoint: '/api/leaderboard/',
        items: entries,
        service: 'leaderboard',
        status: 'ok',
    });
});
exports.default = leaderboardRouter;
