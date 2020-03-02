function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var minEle = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > minEle) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = minEle;
    }
    return arr;
}