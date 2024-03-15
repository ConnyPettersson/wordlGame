import { describe, expect, it } from '@jest/globals';

import input from './wordl.js';

describe('Feedback för Wordle-algoritm', () => {
  it('ska returnera "correct", "incorrect" eller "misplaced" för alla bokstäver', () => {
    const correctWord = 'CYKLA'; 
    const guess = 'HALLÅ';
    const feedback = input(guess, correctWord);
    //Testar att alla bokstäver har rätt plats eller inte och att överblivna dubbletter får 'incorrect' 
    expect(feedback[0]).toEqual({ letter: 'h', result: 'incorrect' }); 
    expect(feedback[1]).toEqual({ letter: 'a', result: 'misplaced' }); 
    expect(feedback[2]).toEqual({ letter: 'l', result: 'incorrect' }); 
    expect(feedback[3]).toEqual({ letter: 'l', result: 'correct' }); 
    expect(feedback[4]).toEqual({ letter: 'å', result: 'incorrect' }); 
  });

  it('ska returnera "incorrect" för alla bokstäver som inte finns i det korrekta ordet', () => {
    const correctWord = 'CYKLA';
    const guess = 'URBXN';
    const feedback = input(guess, correctWord);

    // Kontrollerar varje feedbackobjekt i arrayen
    feedback.forEach(fb => {
      expect(fb.result).toEqual('incorrect');
    });
  });

  it('ska returna "correct" för alla bokstäver som finns i det korrekta ordet', () => {
    const correctWord = 'CYKLA';
    const guess = 'CYKLA';
    const feedback = input(guess, correctWord);
    // Kontrollerar feedback där guess och 'correctWord' är samma ord
    feedback.forEach(fb => {
      expect(fb.result).toEqual('correct');
    });
  });

  it('ska vara okänslig för versaler och gemener', () => {
    const correctWord = 'CYKLA';
    const guess = 'cykla';
    const feedback = input(guess, correctWord);
    // Kontrollerar att feedback blir korrekt trots att gemener och versaler skiljer sig åt
    feedback.forEach(fb => {
      expect(fb.result).toEqual('correct');
    });
  });  
});


