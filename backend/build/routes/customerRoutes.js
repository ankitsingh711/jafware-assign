"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerController_1 = require("../controllers/customerController");
const router = (0, express_1.Router)();
router.get('/customers', customerController_1.getAllCustomers);
router.post('/customers', customerController_1.createCustomer);
exports.default = router;
