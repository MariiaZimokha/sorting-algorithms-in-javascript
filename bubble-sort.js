/**
 * The idea of bubble sort:
 * - in iteration i, compare *a[i]* and *a[i+1]*
 * - if these elements are not in order, swap them
 * 
 * Input array: [7, 10, 5, 3, 8, 4, 2, 9, 6]
 * 
 * - 7 < 10
 * [**7**, **10**, 5, 3, 8, 4, 2, 9, 6]
 * 
 * - 10 > 5, swap
 * [7, **5**, **10**, 3, 8, 4, 2, 9, 6]
 * 
 * - 10 > 3, swap
 * [7, 5, **3**, **10**, 8, 4, 2, 9, 6]
 * 
 * - 10 > 8, swap
 * [7, 5, 3, **8**, **10**, 4, 2, 9, 6]
 * 
 * - 10 > 4, swap
 * [7, 5, 3, 8, **4**, **10**, 2, 9, 6]
 * 
 * - 10 > 2, swap
 * [7, 5, 3, 8, 4, **2**, **10**, 9, 6]
 * 
 * - 10 > 9, swap 
 * [7, 5, 3, 8, 4, 2, **9**, **10**, 6]
 * 
 * - 10 > 6, swap
 * [7, 5, 3, 8, 4, 2, 9, **6**, **10**]
 * 
 * /second iteration
 * 
 * - 7 > 5, swap
 * [**5**, **7**, 3, 8, 4, 2, 9, 6, 10]
 * ...
 * 
 */

function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; ++i) {
        for(let j = 0; j < arr.length - i - 1; ++j) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j]; 
                arr[j] = arr[j + 1]; 
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const randomSorted = [7, 10, 5, 3, 8, 4, 2, 9, 6];
console.log('Average: random sorted array');
console.log('input => ', randomSorted);
console.log('output => ', bubbleSort(randomSorted));

const worstCase = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Worst case: sorted in descending order');
console.log('input => ', worstCase);
console.log('output => ', bubbleSort(worstCase));

console.log('==================');

const bestCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Best case: sorted in ascending order');
console.log('input => ', bestCase);
console.log('output => ', bubbleSort(bestCase));
