import { Request, Response } from 'express';
import Customer, { ICustomer } from '../models/customerModel';

export const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export const createCustomer = async (req: Request, res: Response): Promise<void> => {
  const customer: ICustomer = new Customer(req.body);
  try {
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
