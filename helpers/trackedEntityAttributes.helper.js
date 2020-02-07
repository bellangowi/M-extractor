const _ = require('lodash');
const http = require('./http.helper');

async function discoveringTrackedEntityAttributes(serverUrl, headers) {
    const url = `${serverUrl}/api/trackedEntityAttributes.json?fields=id`;
    let data = { attributes: [] };
    try {
        const body = await http.getHttp(headers, url);
        data = {...data, ...body };
        console.log(data);
    } catch (error) {} finally {
        return data;
    }
}

module.exports = {
    discoveringTrackedEntityAttributes
};