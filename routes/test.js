
import fp from "fastify-plugin";



export default async function (fastify, option) {

    fastify.get(
        '/hello',
        async function (request, reply) {
        return { message: 'Hello, World!' };
      });
}


//export default fp(helloRoutes)