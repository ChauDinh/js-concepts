const QuickSort = (L, H: number, array: number[]) => {
	if (array.length === 0 || array.length === 1) return array;
	let i: number = L;
	let j: number = H;
	let mid: number = array[L + Math.floor((H - L) / 2)];
	do {
		while (array[i] < mid) {
			i++;
		}

		while (array[j] > mid) {
			j--;
		}

		if (i <= j) {
			[array[i], array[j]] = [array[j], array[i]];
			i++;
			j--;
		}
	} while (i <= j);

	if (L < j) {
		QuickSort(L, j, array);
	}
	if (i < H) {
		QuickSort(i, H, array);
	}

	return array;
};

const arr: number[] = [1, 2, -4, 3, 0, 20, 15];
console.log(QuickSort(0, arr.length - 1, arr));
