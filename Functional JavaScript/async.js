function first(callback) {
	setTimeout(function() {
		console.log(1);
		callback();
	}, 1000);
}

function second() {
	console.log(2);
}

first(second);
