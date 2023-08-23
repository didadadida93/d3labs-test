const yargs = require('yargs');

const argv = yargs
    .option('epoch', {
        alias: 'e',
        description: 'The epoch timestamp to convert',
        type: 'number',
        demandOption: true,
    })
    .option('address', {
        alias: 'a',
        description: 'ETH address',
        type: 'string',
        default: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    })
    .option('name', {
        alias: 'n',
        description: 'ETH name',
        type: 'string',
        default: 'BoredApeYachtClub (BAYC)',
    })
    .help()
    .alias('help', 'h')
    .argv;

module.exports = argv;
