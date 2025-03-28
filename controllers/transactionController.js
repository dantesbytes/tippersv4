// controllers/transactionController.js
import https from 'https';
import Transaction from '../models/Transaction.js';
import dotenv from 'dotenv';
dotenv.config

const m = process.env.mystery

const fetchEtherscanTransactions = async (address) => {
  const apiKey = process.env.ETHERSCAN_API_KEY;

  return new Promise((resolve, reject) => {
    const hostname = 'api.etherscan.io';
    const path = `/api?module=account&action=txlist&address=${address}&startblock=0&endblock=${m}&page=1&offset=10&sort=asc&apikey=${apiKey}`;

    const options = { hostname, path, method: 'GET' };

    const req = https.request(options, (res) => {
      
      let body = '';
      res.on('data', (chunk) => {

        body += chunk;
      });


      res.on('end', async () => {
        try {

          const jsonData = JSON.parse(body);

          if (jsonData.status === "1") {

            await Transaction.insertMany(jsonData.result, { ordered: false }).catch(() => { });
            

            resolve(jsonData.result);
            
          } else {
            reject('No transactions found');
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => reject(error));
    req.end();
  });
};


const eth_TransactionReceipt = async (address) => {

  const apiKey = process.env.ETHERSCAN_API_KEY;
}
export { fetchEtherscanTransactions };

