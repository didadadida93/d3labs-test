const { Alchemy, Utils } = require('alchemy-sdk');
const EthDater = require('ethereum-block-by-date');

const prettyPrint = require('./pretty-print');
const formatDateFromEpoch = require('./format-date');
const fetchEthPriceInUSD = require('./eth-price');

const solve = async (address, name, epoch) => {
    const alchemy = new Alchemy();
    const dater = new EthDater(alchemy.core);

    const timestamp = formatDateFromEpoch(epoch);

    let block = await dater.getDate(timestamp);
    block = block['block']
    let balance = await alchemy.core.getBalance(address, block);
    balance = Utils.formatEther(balance);

    let ethPriceInUSD = await fetchEthPriceInUSD(formatDateFromEpoch(epoch, 'DD-MM-YYYY'));
    const value = (balance * ethPriceInUSD).toFixed(2);

    prettyPrint(name, timestamp, balance, value, ethPriceInUSD);
}

module.exports = { solve };
