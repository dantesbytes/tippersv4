// models/Transaction.js - Mongoose Model
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  blockNumber: String,
  blockHash: String,
  timeStamp: String,
  hash: { type: String, unique: true },
  nonce: String,
  transactionIndex: String,
  from: String,
  to: String,
  value: String,
  gas: String,
  gasPrice: String,
  input: String,
  methodId: String,
  functionName: String,
  contractAddress: String,
  cumulativeGasUsed: String,
  txreceipt_status: String,
  gasUsed: String,
  confirmations: Number
}, { timestamps: true });

const SmartContractSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', TransactionSchema, 'SmartContract',SmartContractSchema );
