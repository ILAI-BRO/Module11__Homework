import {repeatWord}  from './index.js';


//unit-тесты

describe('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	it('The function should return the received word and the number of times to repeat it', () => {
	  expect(repeatWord('word', 1)).toBe('word1, ');
	  expect(repeatWord('word', 2)).toBe('word1, word2, ');
	  expect(repeatWord('word', 3)).toBe('word1, word2, word3, ');
	});
  }); 


// Успешное выполнение функции

test ('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	expect(repeatWord('word', 2)).toBe( 'word1, word2, ');
  
}); 


// Неуспешное выполнение функции

xtest ('Output a string with a given number for its repetition, which are passed in the arguments repeatWord(word, number)', () => {
	
	expect(repeatWord('word', 2)).toBe( 'word1, word2,');
  
}); 

