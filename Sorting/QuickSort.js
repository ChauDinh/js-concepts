var QuickSort = function (L, H, array) {
    var _a;
    if (array.length === 0 || array.length === 1)
        return array;
    var i = L;
    var j = H;
    var mid = array[L + Math.floor((H - L) / 2)];
    do {
        while (array[i] < mid) {
            i++;
        }
        while (array[j] > mid) {
            j--;
        }
        if (i <= j) {
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
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
var arr = [1, 2, -4, 3, 0, 20, 15];
console.log(QuickSort(0, arr.length - 1, arr));
