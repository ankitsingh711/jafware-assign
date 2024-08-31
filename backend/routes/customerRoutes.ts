import { Router } from 'express';
import { getAllCustomers, createCustomer } from '../controllers/customerController';

const router: Router = Router();

router.get('/customers', getAllCustomers);
router.post('/customers', createCustomer);

export default router;
