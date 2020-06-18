require('dotenv').config();

const { initScheduler } = require('./modules/scheduler');
const { 
    init,
    timeIn,
    timeOut,
} = require('./modules/sprout');

console.log('Congrats, isa kanang dakilang tamad!');

const { 
    TIMEZONE,
    TIMEIN_SCHEDULE,
    TIMEOUT_SCHEDULE,
} = process.env;

const timeinTask = async () => init(timeIn);
initScheduler(TIMEIN_SCHEDULE, timeinTask, TIMEZONE);

const timeoutTask = async () => init(timeOut);
initScheduler(TIMEOUT_SCHEDULE, timeoutTask, TIMEZONE);
