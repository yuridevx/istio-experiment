import os = require('os')

export function networkInfo() {
    const network = os.networkInterfaces()
    const interfaces = []
    for (const key in network) {
        const found = network[key].find(x => x.family === 'IPv4')
        if (found && found.address !== '127.0.0.1') {
            interfaces.push(found.address)
        }
    }
    const localIps = interfaces.join(' ')

    const hostInfo = {
        user: os.userInfo().username,
        hostname: os.hostname(),
        privateIps: localIps.split(' '),
    }

    return hostInfo
}