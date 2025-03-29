"use strict";
import fp from "fastify-plugin";
import fastifyCors from "@fastify/cors";

async function corsPlugin(fastify, options) {
  fastify.register(fastifyCors, {
    
    origin: false,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  
});
}

export default fp(corsPlugin);

