import logger from "@/util/next-pino/logger";

describe('Logger', () => {
    it('Teste de logger', () => {
        expect(logger.level).toBe("info")
    })
})