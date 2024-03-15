import { describe, expect, it } from '@jest/globals';

import input from './wordl.js';

describe('input()', () => {
  it('does nothing with an empty string', () => {
    const output = input('');
    expect(output).toBe('');
  });
});