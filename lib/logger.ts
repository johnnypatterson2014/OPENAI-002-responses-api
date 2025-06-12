import winston from 'winston';
import 'winston-daily-rotate-file';

const LokiTransport = require("winston-loki");

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: './logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

const { combine, timestamp, json, errors } = winston.format;

const errorFilter = winston.format((info, opts) => {
    return info.level === 'error' ? info : false;
});

const infoFilter = winston.format((info, opts) => {
    return info.level === 'info' ? info : false;
});

// const logger = winston.createLogger({
//     level: process.env.LOG_LEVEL || 'info',
//     format: combine(timestamp(), json()),
//     transports: [
//         new winston.transports.File({
//             filename: 'combined.log',
//         }),
//         new winston.transports.File({
//             filename: 'app-error.log',
//             level: 'error',
//             format: combine(errorFilter(), timestamp(), json()),
//         }),
//         new winston.transports.File({
//             filename: 'app-info.log',
//             level: 'info',
//             format: combine(infoFilter(), timestamp(), json()),
//         }),
//     ],
// });

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    defaultMeta: {
        service: 'fesk-core-ui',
    },
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [
        fileRotateTransport,
        new winston.transports.File({
            filename: './logs/combined.log',
        }),
        new winston.transports.File({
            filename: './logs/app-error.log',
            level: 'error',
            format: combine(errorFilter(), errors({ stack: true }), timestamp(), json()),
        }),
        new winston.transports.File({
            filename: './logs/app-info.log',
            level: 'info',
            format: combine(infoFilter(), errors({ stack: true }), timestamp(), json()),
        }),
        // new LokiTransport({
        //     host: "http://localhost:3100",
        //     json: true,
        //     batching: false,
        //     format: combine(infoFilter(), errors({ stack: true }), timestamp(), json()),
        //     level: 'info',
        //     interval: 5,
        //     labels: {
        //         job: 'nextjs',
        //         service: 'fesk-core-ui',
        //     }
        // }),

        // new winston.transports.Http({
        //     host: 'localhost',
        //     port: 3100,
        //     path: '/loki/api/v1/push',
        //     batch: true,
        //     batchCount: 2,
        //     batchInterval: 1000,
        //     //http://localhost:3100/loki/api/v1/push
        //     level: 'info',
        //     format: combine(infoFilter(), errors({ stack: true }), timestamp(), json()),
        // }),
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: './logs/exception.log' }),
    ],
    rejectionHandlers: [
        new winston.transports.File({ filename: './logs/rejections.log' }),
    ],
});

export default logger;