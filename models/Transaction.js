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

export default mongoose.model('Transaction', TransactionSchema);
