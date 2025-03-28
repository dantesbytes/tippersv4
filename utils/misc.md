



const fastify = Fastify({
  ignoreTrailingSlash: true,
  caseSensitive: false,
  logger: {
    level: "info"
  }
  
});