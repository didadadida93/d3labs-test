const moment = require('moment');

function formatDateFromEpoch(epochTime, format = 'YYYY-MM-DD') {
    if (!moment.unix(epochTime).isValid()) {
        throw new Error('Invalid epoch timestamp');
    }
    return moment.unix(epochTime).format(format);
}

module.exports = formatDateFromEpoch;
