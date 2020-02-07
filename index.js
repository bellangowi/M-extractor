const app = require('./app');

startApp();

async function startApp() {
    try {
        await app.variablesExtraction();
    } catch (error) {} finally {
        return;
    }
}