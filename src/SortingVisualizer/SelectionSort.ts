export default function selectionSort(array: number[]) {
    let arrCopy = array.slice(0);
    let anim = [];
    for (let i = 0; i < arrCopy.length; i++) {
        let minIndex = i;
        for (let j = i; j < arrCopy.length; j++) {
            if (arrCopy[j] < arrCopy[minIndex]) {
                minIndex = j;
                anim.push([i, minIndex, false]);
            }
        }

        [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]]
        anim.push([i, minIndex, true]);
    }
    return anim;
}