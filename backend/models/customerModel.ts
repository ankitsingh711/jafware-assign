import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  email: string;
  phone: string;
  status: string;
}

const customerSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, default: 'Active' },
});

export default mongoose.model<ICustomer>('Customer', customerSchema);
