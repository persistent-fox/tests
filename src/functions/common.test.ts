import { multy, splitIntoWords, sum } from './common';

let a: number;
let b: number;
let c: number;
let sentence: string;

beforeEach(() => {
	a = 1;
	b = 2;
	c = 3;
	sentence = 'Hello  my friend!';
});

test('sum should be correct', () => {
	const result = sum(a, b);
	const result2 = sum(b, c);

	expect(result).toBe(3);
	expect(result2).toBe(5);
});

test('multy should be correct', () => {
	const result = multy(a, c);
	const result2 = multy(b, c);

	expect(result).toBe(3);
	expect(result2).toBe(6);
});

test('sentence should be split correct', () => {
	const result = splitIntoWords(sentence);

	expect(result.length).toBe(3);
	expect(result[0]).toBe('hello');
	expect(result[1]).toBe('my');
	expect(result[2]).toBe('friend');
});
