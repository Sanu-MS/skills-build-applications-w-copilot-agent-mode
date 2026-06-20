"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', async (_request, response) => {
    const users = await user_1.User.find().sort({ createdAt: 1 }).lean();
    response.json({
        count: users.length,
        endpoint: '/api/users/',
        items: users,
        service: 'users',
        status: 'ok',
    });
});
exports.default = usersRouter;
