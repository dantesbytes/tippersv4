import mongoose from 'mongoose';


const walletAddressSchema = new mongoose.Schema({
    
    address: {
        type: String,
        required: true,
        unique: true,
        match: /^0x[a-fA-F0-9]{40}$/ // Validates Ethereum address format
    
    }

    
})

//export default mongoose.model('Transaction', TransactionSchema, 'SmartContract',SmartContractSchema );

export default mongoose.model("walletAddress", walletAddressSchema);