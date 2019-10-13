import fastify = require('fastify')
import os = require('os')
import {networkInfo} from './networkInfo'

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

app.get('/env', (request, reply) => {
    reply.send(process.env)
})

app.get('/network', (request, reply) => {
    reply.send(networkInfo())
})

app.get('/host', (request, reply) => {
    const fns = [
        'hostname',
        'type',
        'release',
        'homedir',
        'arch',
        'platform',
        'tmpdir',
    ]

    const info: any = {}

    for (let fnName of fns) {
        info[fnName] = os[fnName]()
    }

    info.userInfo = os.userInfo({
        encoding: 'utf8',
    })


    reply.send(info)
})

app.get('/resources', (request, reply) => {
    const fns = [
        'loadavg',
        'uptime',
        'freemem',
        'cpus',
    ]

    const info: any = {}

    for (let fnName of fns) {
        info[fnName] = os[fnName]()
    }

    info.userInfo = os.userInfo({
        encoding: 'utf8',
    })


    reply.send(info)
})


app.listen(9080)