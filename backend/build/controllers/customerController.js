"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = exports.getAllCustomers = void 0;
const customerModel_1 = __importDefault(require("../models/customerModel"));
const getAllCustomers = async (req, res) => {
    try {
        const customers = await customerModel_1.default.find();
        res.json(customers);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};
exports.getAllCustomers = getAllCustomers;
const createCustomer = async (req, res) => {
    const customer = new customerModel_1.default(req.body);
    try {
        const savedCustomer = await customer.save();
        res.status(201).json(savedCustomer);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
};
exports.createCustomer = createCustomer;
