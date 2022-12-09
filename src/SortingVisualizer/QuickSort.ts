let anim: number[][] = [];
export default function quickSortPublic(array: number[]): number[][] {
    anim = []
    let arrCopy: number[] = array.slice(0);
    quickSort(arrCopy, 0, arrCopy.length - 1);
    return anim;
}

function quickSort(arr: number[], low: number, high: number) {

    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}


function partition(arr: number[], low: number, high: number) {
    let i = low - 1;
    for (let index = low; index <= high - 1; index++) {
        if (arr[index] <= arr[high]) {
            i++;
            [arr[i], arr[index]] = [arr[index], arr[i]]
            anim.push([i, index]);
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    anim.push([i + 1, high]);
    return i + 1;
}