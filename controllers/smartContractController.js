import SmartContract from '../models/Transaction.js';



const analyzeContractTransactions = async (request, reply) => {
    const { contractId } = request.params;

    try {
        const contract = await SmartContract.findById(contractId);
        if (!contract) {
            return reply.status(404).send({ error: "Smart contract not found" });
        }

        const transactions = await fetchEtherscanTransactions(contract.address);
        reply.send({ contract, transactions });
    } catch (error) {
        reply.status(500).send({ error: error.message });
    }
};

export {analyzeContractTransactions };
