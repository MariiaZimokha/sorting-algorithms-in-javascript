/**
 * The idea of seletion sort:
 * - in iteration i, swap *a[i]* with each larger entry to its left
 * 
 * Input array: [7, 10, 5, 3, 8, 4, 2, 9, 6]
 * 
 * - 7 is in order  
 * [**7**, 10, 5, 3, 8, 4, 2, 9, 6] 
 *
 * - 10 is in order
 * [7, **10**, 5, 3, 8, 4, 2, 9, 6] 
 * 
 * - 5 is smaller then 10 (swap them)
 * - 5 is smaller then 7 (swap them)
 * [**5**, **7**, **10**, 3, 8, 4, 2, 9, 6] 
 * 
 * - 3 is smaller then 10 (swap them)
 * - 3 is smaller then 7 (swap them)
 * - 3 is smaller then 5 (swap them)
 * [**3**, **5**, **7**, **10**, 8, 4, 2, 9, 6] 
 * 
 * - 8 is smaller then 10 (swap them)
 * [3, 5, 7, **8**, **10**, 4, 2, 9, 6] 
 * 
 * - 4 is smaller then 10 (swap them)
 * - 4 is smaller then 8 (swap them)
 * - 4 is smaller then 7 (swap them)
 * - 4 is smaller then 5 (swap them)
 * [3, **4**, **5**, **7**, **8**, **10**, 2, 9, 6] 
 * 
 * - 2 is smaller then 10 (swap them)
 * - 2 is smaller then 8 (swap them)
 * - 2 is smaller then 7 (swap them)
 * - 2 is smaller then 5 (swap them)
 * - 2 is smaller then 4 (swap them)
 * - 2 is smaller then 3 (swap them)
 * [**2**, **3**, **4**, **5**, **7**, **8**, **10**, 9, 6]
 * 
 * - 9 is smaller then 10 (swap them)
 * [2, 3, 4, 5, 7, 8, **9**, **10**, 6] 
 * 
 * - 6 is smaller then 10 (swap them)
 * - 6 is smaller then 9 (swap them)
 * - 6 is smaller then 8 (swap them)
 * - 6 is smaller then 7 (swap them)
 * [2, 3, 4, 5, **6**, **7**, **8**, **9**, **10**] 

To sort randomly-ordered array with distinct keys, insertion sort uses ~ *1/4 N^2* compares and ~ *1/4 N^2* exchanges on average.
 */

function insersionSort(arr) {
    for(let i = 0; i < arr.length; ++i) {
        for(let j = i; j > 0; --j) {
            if(arr[j] <= arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}

const randomSorted = [7, 10, 5, 3, 8, 4, 2, 9, 6];
console.log('Average: random sorted array');
console.log('input => ', randomSorted);
console.log('output => ', insersionSort(randomSorted));

console.log('==================');

const worstCase = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Worst case: sorted in descending order');
console.log('input => ', worstCase);
console.log('output => ', insersionSort(worstCase));

console.log('==================');

const bestCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Best case: sorted in ascending order');
console.log('input => ', bestCase);
console.log('output => ', insersionSort(bestCase));