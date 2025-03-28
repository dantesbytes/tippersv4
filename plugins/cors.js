// plugins/corsPlugin.js
import fastifyCors from '@fastify/cors';


export default async function (fastify, options) {
  this.fastify.register(fastifyCors, {
    origin: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
}




