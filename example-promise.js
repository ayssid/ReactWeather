function getTempCallBack(location, callback) {
	callback(undefined, 78);
	callback('City no found');
}

getTempCallBack('Serpong', function (err, temp) {
	if(err) {
		console.log('error', err);
	} else {
		console.log('success', temp);
	}
});

function getTempPromise(location) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(79);
			reject('City Not Found');
		}, 1000);
	});
}

getTempPromise('Serpong').then(function (temp) {
	console.log('promise success', temp);
}, function (err) {
	console.log('promis error', err);
})