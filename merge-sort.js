/**
 * 
 *  Divide array into two subarrays a[start..mid] with a[mid+1..end] 
 *  into a single ordered array, leaving the result in a[start..end].
 * 
 *  merge() copies everything to an auxiliary array and then merges back to the original.
 * 
 * 
 */ 


class MergeSort {
    /**
     * 
     * @param {array} arr - initial array
     * @param {Number} start - index of the first element
     * @param {Number} end - index of the last element
     * @param {Number} mid - index of the middle element
     */
    static merge (arr, start, end, mid) {
        const aux = arr.map((i) => i);

        let i = start;
        let j = mid + 1;

        for (let k = start; k <= end; k++) {
            if      (i > mid)              arr[k] = aux[j++]; // put second half into array
            else if (j > end)              arr[k] = aux[i++]; // put first half into array
            else if (aux[j] < aux[i])      arr[k] = aux[j++];
            else                           arr[k] = aux[i++];
        }

        return arr;
    }

    /**
     * 
     * @param {array} arr - initial array
     * @param {Number} start - index of the first element
     * @param {Number} end - index of the last element
     */
    static sort(arr, start, end) {
        if(end <= start) return;

        const mid = Math.floor((start + end) / 2);

        MergeSort.sort(arr, start, mid);
        MergeSort.sort(arr, mid + 1, end);

        MergeSort.merge(arr, start, end, mid);
        return arr;
    }
}

const randomSorted = [7, 10, 5, 3, 8, 4, 2, 9, 6];
console.log('Average: random sorted array');
console.log('input => ', randomSorted);
console.log('output => ', MergeSort.sort(randomSorted, 0, randomSorted.length - 1));

console.log('==================');

const worstCase = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Worst case: sorted in descending order');
console.log('input => ', worstCase);
console.log('output => ', MergeSort.sort(worstCase, 0, worstCase.length - 1));

console.log('==================');

const bestCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Best case: sorted in ascending order');
console.log('input => ', bestCase);
console.log('output => ', MergeSort.sort(bestCase, 0, bestCase.length - 1));