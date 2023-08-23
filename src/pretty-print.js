const Table = require('cli-table3');

const prettyPrint = (name, timestamp, balance, value, ethPriceInUSD) => {
    const table = new Table();
    table.push([name, timestamp]);
    table.push(['ETH balance:', `${balance} ETH`]);
    table.push(['ETH value:', `\$${value} (@\$${ethPriceInUSD}/ETH)`]);
    console.log(table.toString());
}

module.exports = prettyPrint;
