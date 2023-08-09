const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
// 시스템 가동 시간을 가지고 있음.
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);