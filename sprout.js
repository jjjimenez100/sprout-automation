const puppeteer = require('puppeteer');

const { 
    SPROUT_URL,
    TOOLTWIST_EMAIL,
    TOOLTWIST_PASSWORD,
} = process.env;

const clickConfirmModal = async () => {
    await page.waitFor(1000);
    await page.click('[data-bb-handler="success"]');
};

const timeIn = async () => {
    await page.click('[data-bind="click: webBundyLogIn"');
    await clickConfirmModal();

    console.log('Done with time in.');
};

const timeOut = async () => {
    await page.click('[data-bind="click: webBundyLogOut"');
    await clickConfirmModal();

    console.log('Done with time out.');
};

const loginUser = async () => {
    console.log(`Logging in as ${TOOLTWIST_EMAIL}...`);

    await page.$eval('#txtUsername', element => element.value = TOOLTWIST_EMAIL);
    await page.$eval('#txtPassword', element => element.value = TOOLTWIST_PASSWORD);

    await page.click('#btnLogIn');
    await page.waitFor(10000);

    console.log(`Logged in.`)
};

// sproutAction is a method reference to be used as a callback
const init = async (sproutAction) => {
    console.log('Staring chromium browser...');

    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(SPROUT_URL);
    await loginUser();

    await page.click('[data-bind="click: toggleClock"]');
    await sproutAction();

    await page.waitFor(2000);
    await browser.close();

    console.log('Done.');
};

module.exports = {
    timeIn,
    timeOut,

    init,
};