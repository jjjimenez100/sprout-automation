require('dotenv').config();

const { initScheduler } = require('./scheduler');
const { 
    init,
    timeIn,
    timeOut,
} = require('./sprout');

console.log('Congrats, isa kanang dakilang tamad!');

const { 
    TIMEZONE,
    TIMEIN_SCHEDULE,
    TIMEOUT_SCHEDULE,
} = process.env;

const timeinTask = () => init(timeIn);
initScheduler(TIMEIN_SCHEDULE, timeinTask, TIMEZONE);

const timeoutTask = () => init(timeOut);
initScheduler(TIMEOUT_SCHEDULE, timeoutTask, TIMEZONE);
