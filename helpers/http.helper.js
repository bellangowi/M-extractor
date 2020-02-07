const request = require('request');
const Promise = require('promise');

async function getHttp(headers, url) {
    return new Promise((resolve, reject) => {
        request({
                headers,
                uri: url,
                method: 'GET',
            },
            (error, response, body) => {
                if (!error) {
                    let data = null;
                    try {
                        data = JSON.parse(body);
                    } catch (error) {} finally {
                        resolve(data);
                    }
                } else {
                    reject(error);
                }
            }
        );
    });
}
module.exports = { getHttp};