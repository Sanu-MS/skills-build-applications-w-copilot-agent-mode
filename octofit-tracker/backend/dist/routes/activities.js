"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = require("../models/activity");
const activitiesRouter = (0, express_1.Router)();
activitiesRouter.get('/', async (_request, response) => {
    const activities = await activity_1.Activity.find().sort({ performedAt: -1 }).lean();
    response.json({
        count: activities.length,
        endpoint: '/api/activities/',
        items: activities,
        service: 'activities',
        status: 'ok',
    });
});
exports.default = activitiesRouter;
