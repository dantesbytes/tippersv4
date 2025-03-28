"use strict";
import fp from "fastify-plugin";
import fastifyCors from "@fastify/cors";

const fastify = Fastify({
  ignoreTrailingSlash: true,
  caseSensitive: false,
  logger: {
    level: "info"
  }
  
});



async function corsPlugin(fastify, options) {
  fastify.register(fastifyCors, {
    
    origin: false,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  
});
}

export default fp(corsPlugin);

//export { serverOptions as options };







/**
 * fastify.register(cors, {
   origin: "http://localhost:3000", // Adjust for production (e.g., 'https://yourdomain.com')
   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
   allowedHeaders: ["Content-Type", "Authorization"],
   credentials: true,
 });
 
 */
