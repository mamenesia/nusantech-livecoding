const isPalindrome = str => {
	str = str.toLowerCase()
	console.log(
		str ===
			str
				.split('')
				.reverse()
				.join('')
			? true
			: false
	)
}

isPalindrome('malamMaaM')
isPalindrome('malaM inI malaM')
