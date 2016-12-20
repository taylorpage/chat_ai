//INITIATE TEXT ANALYSIS
button.onclick = () => {
	let text  = document.getElementById('request').value.toLowerCase()
	let button = document.getElementById('button')

	let results = 'statement';
	let question_key_words = ['who', 'what', 'where', 'when', 'why', 'how']

	text.split(' ').forEach((word) => {
		if (question_key_words.indexOf(word) > -1 || word.indexOf('?') > -1) {
			results = 'question';
		}
	});
	console.log(results);
}