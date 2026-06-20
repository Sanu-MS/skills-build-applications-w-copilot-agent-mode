"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workout_1 = require("../models/workout");
const workoutsRouter = (0, express_1.Router)();
workoutsRouter.get('/', async (_request, response) => {
    const workouts = await workout_1.Workout.find().sort({ createdAt: 1 }).lean();
    response.json({
        count: workouts.length,
        endpoint: '/api/workouts/',
        items: workouts,
        service: 'workouts',
        status: 'ok',
    });
});
exports.default = workoutsRouter;
