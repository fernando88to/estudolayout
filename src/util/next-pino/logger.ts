// this is the logger for the browser
import pino from "pino";



const pinoConfig = {
    browser: {
        asObject: true
    },
    level: 'info'
}

const logger = pino(pinoConfig)

//export const log = (msg:string) => logger.info(msg)
export default logger