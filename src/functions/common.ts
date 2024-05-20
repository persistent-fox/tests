export function sum(a: number, b: number) {
	return a + b;
}

export function multy(a: number, b: number) {
	return a * b;
}

export function splitIntoWords(sentence: string) {
	const result = sentence.toLowerCase().replace(/[\W_]+/g, function (match) {
		return match.trim() ? '' : ' ';
	});

	console.log(result);

	return result.split(' ');
}
