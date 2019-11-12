# sorting-algorithms-in-javascript
Sorting algorithms in javascript


## Time complexity

| Name | Best | Average | Worst |
| :----- | :------: | :------: | :----- |
|Quick | *O*(n Logn) | *O*(n Logn) | *O*(n^2) |
|[Merge](https://github.com/MariiaZimokha/Tasks-teasers/tree/master/sort%20algorithms#merge-sort) | *O*(n Logn) | *O*(n Logn) | *O*(n Logn) |
|[Bubble](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/README.md#bubble-sort) | *O*(n) | *O*(n^2) | *O*(n^2) |
|[Insertion](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/README.md#insertion-sort) | *O*(n) | *O*(n^2) | *O*(n^2) |
|[Selection](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/README.md#selection-sort) | *O*(n^2) | *O*(n^2) | *O*(n^2) |

## Merge Sort
**The idea of merge sort**:
It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The **merge()** function is used for merging two halves. The **merge(arr, start, end, mid**) is key process that assumes that *arr[start..mid]* and *arr[mid+1..end]* are sorted and merges the two sorted sub-arrays into one.

*Green numbers indicate the order in which steps are processed*

![merge sort](./assets/merge-sort.png?raw=true)


## Selection Sort
**The idea of seletion sort**:
 - in iteration i, find the index min of smallest remaining entry
 - swap a[i] and a[min]

 Input array: [7, 10, 5, 3, 8, 4, 2, 9, 6]
 
 | Step | Visualization |
 | :----- | :-------- |
 | min is 2, swap with a[0] | [**2**, 10, 5, 3, 8, 4, 7, 9, 6] |
 | min is 3, swap with a[1] | [**2**, **3**, 5, 10, 8, 4, 7, 9, 6] |
 | min is 4, swap with a[2] | [**2**, **3**, **4**, 10, 8, 5, 7, 9, 6] |
 | min is 5, swap with a[3] | [**2**, **3**, **4**, **5**, 8, 10, 7, 9, 6] |
 | min is 6, swap with a[4] | [**2**, **3**, **4**, **5**, **6**, 10, 7, 9, 8] |
 | min is 7, swap with a[5] | [**2**, **3**, **4**, **5**, **6**, **7**, 10, 9, 8] |
 | min is 8, swap with a[6] | [**2**, **3**, **4**, **5**, **6**, **7**, **8**, 9, 10]|
 | min is 9, swap with a[7] | [**2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, 10] |
 | min is 10, swap with a[8] | [**2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**] |

 Selection sort uses (N - 1) + (N - 2) + (N - 3) + ... + 2 + 1 + 0 ~ (N^2)/2 compares
 and exchanges. It can be seen in the table above.
 Implantation is [here](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/selection-sort.js)
 

## Insertion Sort
**The idea of seletion sort**:
 - in iteration i, swap *a[i]* with each larger entry to its left

 Input array: [7, 10, 5, 3, 8, 4, 2, 9, 6]
 
 | Step | Visualization |
 | :----- | :-------- |
 | 7 is in order | [**7**, 10, 5, 3, 8, 4, 2, 9, 6] |
 | 10 is in order | [7, **10**, 5, 3, 8, 4, 2, 9, 6] |
 | 5 is smaller then 10 (swap them) <br> 5 is smaller then 7 (swap them) | [**5**, **7**, **10**, 3, 8, 4, 2, 9, 6] |
 | 3 is smaller then 10 (swap them) <br> 3 is smaller then 7 (swap them) <br> 3 is smaller then 5 (swap them) | [**3**, **5**, **7**, **10**, 8, 4, 2, 9, 6] |
 | 8 is smaller then 10 (swap them) | [3, 5, 7, **8**, **10**, 4, 2, 9, 6] |
 | 4 is smaller then 10 (swap them) <br> 4 is smaller then 8 (swap them) <br> 4 is smaller then 7 (swap them) <br> 4 is smaller then 5 (swap them) | [3, **4**, **5**, **7**, **8**, **10**, 2, 9, 6] |
 | 2 is smaller then 10 (swap them) <br> 2 is smaller then 8 (swap them) <br> 2 is smaller then 7 (swap them) <br> 2 is smaller then 5 (swap them) <br> 2 is smaller then 4 (swap them) <br> 2 is smaller then 3 (swap them) | [**2**, **3**, **4**, **5**, **7**, **8**, **10**, 9, 6] |
 | 9 is smaller then 10 (swap them) | [2, 3, 4, 5, 7, 8, **9**, **10**, 6] |
 | 6 is smaller then 10 (swap them) <br> 6 is smaller then 9 (swap them) <br> 6 is smaller then 8 (swap them) <br> 6 is smaller then 7 (swap them) | [2, 3, 4, 5, **6**, **7**, **8**, **9**, **10**] |

To sort randomly-ordered array with distinct keys, insertion sort uses ~ *1/4 N^2* compares and ~ *1/4 N^2* exchanges on average.

**Best case**. If the array is in ascending order, insertion sort makes *N*-1 compares and *0* exchanges.

**Worst case**. If the array is in descending order (and no duplicates), insertion sort makes ~*1/2 N^2* compares and ~*1/2 N^2* exchanges.

**Proposition** For partially-sorted array, insertion sort runs in linear time.

**Proof** Number of exchanges equals the number of inversions. (number of compares = exchanges + (N - 1))

Implantation is [here](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/insertion-sort.js)

## Bubble sort

**The idea of seletion sort**:
 - in iteration i, swap *a[i]* with each larger entry to its left
 
Input array: [7, 10, 5, 3, 8, 4, 2, 9, 6]

| Step | Visualization |
| :----- | :-------- |
| *first iteration* |
| 7 < 10 | [**7**, **10**, 5, 3, 8, 4, 2, 9, 6] |
| 10 > 5, swap | [7, **5**, **10**, 3, 8, 4, 2, 9, 6] |
| 10 > 3, swap | [7, 5, **3**, **10**, 8, 4, 2, 9, 6] |
| 10 > 8, swap | [7, 5, 3, **8**, **10**, 4, 2, 9, 6] |
| 10 > 4, swap | [7, 5, 3, 8, **4**, **10**, 2, 9, 6] |
| 10 > 2, swap | [7, 5, 3, 8, 4, **2**, **10**, 9, 6] |
| 10 > 9, swap | [7, 5, 3, 8, 4, 2, **9**, **10**, 6] |
| 10 > 6, swap | [7, 5, 3, 8, 4, 2, 9, **6**, **10**] |
| *second iteration* |
| 7 > 5, swap | [**5**, **7**, 3, 8, 4, 2, 9, 6, 10] |
|.... |
 
 
**Best case**.	If the array is in descending order, bubbel sort uses *O(N^2)* comparisons for basic version and *O(N)* for the optimized one, *O(1)* exchanges

**Worst case**. If the array is in ascending order, bubble sort uses *O(N^2)* comparisons and *O(n^2)* exchanges

Implantation is [here](https://github.com/zimokha/Tasks-teasers/blob/master/sort%20algorithms/bubble-sort.js)

