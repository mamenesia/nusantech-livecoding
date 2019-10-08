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

isPalindrome('malammalam')
isPalindrome('malaM ini malam')
