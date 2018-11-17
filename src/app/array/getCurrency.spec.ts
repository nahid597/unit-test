
import {currency} from './getCurrency'

describe('currency', () => {
    it('return arry of currency' , () => {
        const result = currency();
        expect(result).toContain('AUD');
        expect(result).toContain('USD');
        expect(result).toContain('ERU');

    })
})
