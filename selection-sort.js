/**
 * The idea of seletion sort:
 * 
 *  - in iteration i, find the index min of smallest remaining entry
 *  - swap a[i] and a[min]
 * 
 *  [7, 10, 5, 3, 8, 4, 2, 9, 6]
 *  - min is 2, swap with a[0]
 *  [**2**, 10, 5, 3, 8, 4, 7, 9, 6]
 *  - min is 3, swap with a[1]
 *  [**2**, **3**, 5, 10, 8, 4, 7, 9, 6]
 *  - min is 4, swap with a[2]
 *  [**2**, **3**, **4**, 10, 8, 5, 7, 9, 6]
 *  - min is 5, swap with a[3]
 *  [**2**, **3**, **4**, **5**, 8, 10, 7, 9, 6]
 *  - min is 6, swap with a[4]
 *  [**2**, **3**, **4**, **5**, **6**, 10, 7, 9, 8]
 *  - min is 7, swap with a[5]
 *  [**2**, **3**, **4**, **5**, **6**, **7**, 10, 9, 8]
 *  - min is 8, swap with a[6]
 *  [**2**, **3**, **4**, **5**, **6**, **7**, **8**, 9, 10]
 *  - min is 9, swap with a[7]
 *  [**2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, 10]
 *  - min is 10, swap with a[8]
 *  [**2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**]
 * 
 *  Selection sort uses (N - 1) + (N - 2) + (N - 3) + ... + 2 + 1 + 0 ~ (N^2)/2 compares
 *  and exchanges
 * 
 */ 

function seletionSort(arr) {
    for(let i = 0; i < arr.length; ++i) {
        let min = i;
        for(let j = i + 1; j < arr.length; ++j) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
}
 
const randomSorted = [7, 10, 5, 3, 8, 4, 2, 9, 6];
console.log('Average: random sorted array');
console.log('input => ', randomSorted);
console.log('output => ', seletionSort(randomSorted));

console.log('==================');

const worstCase = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log('Worst case: sorted in descending order');
console.log('input => ', worstCase);
console.log('output => ', seletionSort(worstCase));

console.log('==================');

const fewUnique = [7, 10, 5, 3, 8, 4, 2, 3, 3, 8, 11, 5, 12];
console.log('With few unique elements');
console.log('input => ', fewUnique);
console.log('output => ', seletionSort(fewUnique));

