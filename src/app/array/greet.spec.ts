

import {greet} from './greet';

describe('greet', () => {
    it('name checked', () => {
       const result = greet('nahid');
       expect(result).toContain('nahid');
    })
})
