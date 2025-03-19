// app.js - Main entry point for Fastify API
import Fastify from 'fastify';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import transactionRoutes from './routes/transactionRoutes.js';
import cors from "@fastify/cors";



dotenv.config();
const fastify = Fastify({ logger: true });
connectDB();

fastify.register(cors, {
  origin: "http://localhost:3000", // Adjust for production (e.g., 'https://yourdomain.com')
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});


fastify.register(transactionRoutes);

const displayCoolAsciiArt = () => {
    console.log('\n');
    console.log('\x1b[33m' + '████████╗██╗██████╗ ██████╗ ███████╗██████╗ ███████╗    ₿' + '\x1b[0m');
    console.log('\x1b[33m' + '╚══██╔══╝██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝    ' + '\x1b[0m');
    console.log('\x1b[33m' + '   ██║   ██║██████╔╝██████╔╝█████╗  ██████╔╝███████╗    ' + '\x1b[0m');
    console.log('\x1b[33m' + '   ██║   ██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║    ' + '\x1b[0m');
    console.log('\x1b[33m' + '   ██║   ██║██║     ██║     ███████╗██║  ██║███████║    ' + '\x1b[0m');
    console.log('\x1b[33m' + '   ╚═╝   ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝    ' + '\x1b[0m');
    console.log('\n');
  };
const start = async () => {
    try {
        displayCoolAsciiArt();

    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
    fastify.log.info(`Server running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();