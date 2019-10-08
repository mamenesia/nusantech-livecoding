const urutkan = arr => {
	let temp
	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	console.log(arr)

	let arr2 = arr
	for (let i = arr2.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr2[j] < arr2[j + 1]) {
				temp = arr2[j + 1]
				arr2[j + 1] = arr2[j]
				arr2[j] = temp
			}
		}
	}
	console.log(arr2)
}
urutkan([4, 6, 2, 6, 7, 1, 3, 8, 2, 10, 9])
urutkan([3, 444, 5555, 2222, 5556, 7777, 2223])
