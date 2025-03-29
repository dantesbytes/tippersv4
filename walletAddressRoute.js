"use strict"

import { request } from "http"
import { walletAddress } from "../controllers/"
import { error } from "console";
import fp from "fastify-plugin";


export default async function (fastify, opts) {

    fastify.post(

        "/address",
        { preHandler: requireSession(true, true, false) },
        
        async function (request, reply) {
            try {
                const { address } = request.body;

                if (!address) {
                    return reply.status(400).send({ error: "Address is required" });
                }

                address.push(address);
                reply.status(201).send({message: "Address stored successfully", address })
            } catch (error) {
                reply.status(500).send({ error: error.message });
            }

            return walletAddress()
            
        }
    )
    
}

/**
async function walletAddressRoutes(fastify, options) {
    fastify.post("/address", async (request, reply) => {
        try {
            const { address } = request.body;

            if (!address) {
                return reply.status(400).send({ error: "Address is required" });
            }

            addresses.push(address);

            reply.status(201).send({ message: "Address stored successfully", address });
        } catch (error) {
            reply.status(500).send({ error: error.message });
        }
    });
    
}

**/

//export default fp(walletAddressRoutes);
