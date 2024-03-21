import { describe, expect, it } from '@jest/globals';
import selectWord, { allLettersUnique } from './selectWord.js';

describe('selectWord testfunktion', () => {
  it('ska returnera ett ord av önskad längd med unika bokstäver', () => {
    const words = ['flodhäst', 'björn', 'hund', 'get', 'elefant'];
    const length = 4;  
    const unique = true;

    const result = selectWord(words, length, unique);

    // Kontrollera först att resultatet inte är null
    expect(result).not.toBeNull();

    // Om resultatet inte är null, fortsätt med de övriga testerna
    if (result) {
      expect(result).toHaveLength(length);
      expect(allLettersUnique(result)).toBe(true);
    }
  });
  it('ska returnera null när inga ord matchar kriterierna', () => {
    const words = ['ål', 'apa', 'sparv'];
    const length = 4;  // Inget ord med denna längd finns i listan
    const unique = false;

    const result = selectWord(words, length, unique);

    expect(result).toBeNull();  // Förväntar sig att inget ord hittas
  });
});



