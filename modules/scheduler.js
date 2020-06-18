const { CronJob } = require('cron');

const initScheduler = (cronExpression, cronFunction, timezone) => {
    return new CronJob(cronExpression, cronFunction, null, true, timezone);
};

module.exports = {
    initScheduler,
};