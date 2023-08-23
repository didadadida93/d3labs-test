const argv = require('./src/argv');
const testBackend = require('./src/test-backend');

(async function main() {
    try {
        await testBackend.solve(argv.address, argv.name, argv.epoch);
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()

