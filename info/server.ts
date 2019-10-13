import fastify = require('fastify')

const app = fastify(
    {
        logger: true,
    },
)

app.get('/', (request, reply) => {

    reply.send({
        headers: request.headers,
        body: request.body,
    })
})

app.listen(9080)