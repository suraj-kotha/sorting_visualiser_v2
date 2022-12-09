export const BUBBLE_SORT = "Bubble sort \n" +
    "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. \n This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. The algorithm starts at the beginning of the data set. \n It compares the first two elements, and if the first element is greater than the second element, it swaps them. It continues doing this for each pair of adjacent elements till the end of the data set is reached. \n It then starts again with the first two elements, repeating until no swaps have occurred on the last pass.\n" +
    "\n" +
    "Average Complexity\tO(n^2)\n" +
    "Best Case\t\tO(n)\n" +
    "Worst Case\t\tO(n^2)\n" +
    "Space Complexity\tO(1)\n"

export const INSERTION_SORT = "Insertion Sort\n" +
    "Insertion sort is a simple sorting algorithm that works similarly to how you would arrange playing cards in your hands.\n The array is split into two sections: sorted and unsorted. Unsorted section values are chosen and allocated to the appropriate location in the sorted component.\n Insertion sort works well for little data values. A new sorted list is created by taking each element from the original list and adding it in the appropriate place.\n The new list and the existing items in an array can share the same array space, but inserting a new element is costly since it requires moving every subsequent element by one.\n" +
    "\n" +
    "Average Complexity\tO(n^2)\n" +
    "Best Case\t\tO(n)\n" +
    "Worst Case\t\tO(n^2)\n" +
    "Space Complexity\tO(1)"

export const SELECTION_SORT = "Selection Sort\n" +
    "The selection sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part and moved to the beginning of the array. The algorithm finds the minimum value, swaps it with the value in the first position, and repeats these steps for the remainder of the list.\n It does no more than n swaps, and thus is useful where swapping is very expensive.\n" +
    "\n" +
    "Average Complexity\tO(n^2)\n" +
    "Best Case\t\tO(n^2)\n" +
    "Worst Case\t\tO(n^2)\n" +
    "Space Complexity\tO(1)"

export const QUICK_SORT = "Quick Sort\n" +
    "QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot. All the elements bigger than the pivot get placed on one side of the structure, the smaller ones on the another side, creating two partitions.\n Next this process gets applied recursively to the two partitions until you get a partition of size 1.\n" +
    "\n" +
    "Average Complexity\tO(n × log n)\n" +
    "Best Case\t\tO(n × log n)\n" +
    "Worst Case\t\tO(n^2)\n" +
    "Space Complexity\tO(n)"

export const SORT_HEADING = "Sorting Algorithms: \n" +
    "Sorting algorithms are programs that take an array or list as input and arrange the contents in a certain order. \n" +
    " Sorts are often in numerical or alphabetical (or lexicographical) order, and can be ascending (A-Z, 0-9) or descending (Z-A, 9-0).\n" +
    "There are several sorting algorithms available today, each with its own specific set of characteristics. \n" +
    "They are categorized based on two metrics: space complexity and time complexity.\n" +
    " Sorting algorithms can be difficult to understand and it's easy to get confused. Therefore visualizing sorting algorithms can be a great way to better understand their functioning.\n"


export let paraMap = new Map<string, string>([
    ["bubbleSort", BUBBLE_SORT],
    ["quickSort", QUICK_SORT],
    ["selectionSort", SELECTION_SORT],
    ["insertionSort", INSERTION_SORT],
    ["default", SORT_HEADING]
])