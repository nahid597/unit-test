
import {compute} from './compute'

import { from } from "rxjs";

describe('compute' , () => {
    it('should return 0 if input is negative', () => {
      const result = compute(-1);
      expect(result).toBe(0);
    })
});

describe('compute', () => {
    it('should return 1 if input is positive', () => {
        const result = compute(0);
        expect(result).toBe(1);
    })
})
