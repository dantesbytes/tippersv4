import SmartContract from "../controllers/smartContractController.js";

async function smartContractRoutes(fastify, options) {
    // Create a new Smart Contract Object
    fastify.post("/contracts", async (request, reply) => {
        const { name, address } = request.body;

        if (!name || !address) {
            return reply.status(400).send({ error: "Name and contract address are required" });
        }

        try {
            const contract = new SmartContract({ name, address });
            await contract.save();
            reply.send({ message: "Smart contract registered for analysis", contract });
        } catch (error) {
            reply.status(500).send({ error: error.message });
        }
    });

    // Fetch all registered smart contracts
    fastify.get("/contracts", async (request, reply) => {
        try {
            const contracts = await SmartContract.find();
            reply.send(contracts);
        } catch (error) {
            reply.status(500).send({ error: error.message });
        }
    });
}

export default smartContractRoutes;
