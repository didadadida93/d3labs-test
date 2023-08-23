const axios = require('axios');

const fetchEthPriceInUSD = async (date) => {
    const coingeckoResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum/history`, {
        params: { date }
    });
    if (
        coingeckoResponse.status === 200
        && coingeckoResponse.data
        && coingeckoResponse.data.market_data
        && coingeckoResponse.data.market_data.current_price
        && coingeckoResponse.data.market_data.current_price.usd
    ) {
        return coingeckoResponse.data.market_data.current_price.usd.toFixed(2);
    } else {
        throw new Error('Failed to fetch ETH price from the API.');
    }
}

module.exports = fetchEthPriceInUSD;
