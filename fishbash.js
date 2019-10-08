const fishbash = n => {
	for (let i = 0; i <= n; i++) {
		if (i === 0) {
			continue
		} else if (i % 3 === 0 && i % 5 === 0) {
			console.log(`${i} fish bash`)
		} else if (i % 3 === 0) {
			console.log(`${i} fish`)
		} else if (i % 5 === 0) {
			console.log(`${i} bash`)
		} else {
			continue
		}
	}
}

fishbash(50)
