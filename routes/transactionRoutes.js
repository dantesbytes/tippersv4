import { fetchEtherscanTransactions } from '../controllers/transactionController.js';

async function transactionRoutes(fastify, options) {
  fastify.get('/transactions', async (request, reply) => {
    const { address } = request.query;

    if (!address) {
      return reply.status(400).send({ error: 'Ethereum address is required' });
    }

    try {
      const transactions = await fetchEtherscanTransactions(address);

      reply.send(transactions);
    } catch (error) {
      reply.status(500).send({ error: error.message });
    }
  });
}

export default transactionRoutes;
