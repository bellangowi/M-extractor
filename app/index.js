const { sourceConfig } = require('../config/index');
const Util = require('../helpers/util.helper');
const trackedentityAttributeHelper = require('../helpers/trackedEntityAttributes.helper');

const souceServerUrl = sourceConfig.url;
async function variablesExtraction() {
    const sourceHeaders = await Util.getHttpAuthorizationHeader(
        sourceConfig.username,
        sourceConfig.password
    );
    await trackedentityAttributeHelper.discoveringTrackedEntityAttributes(
        souceServerUrl,
        sourceHeaders
    );
}
module.exports = { variablesExtraction };