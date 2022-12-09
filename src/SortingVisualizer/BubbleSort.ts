export default function bubbleSort(array: number[]): number[][] {
    let arrCopy = array.slice(0);
    let anim = []
    const len = arrCopy.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arrCopy[j] > arrCopy[j + 1]) {
                [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
                anim.push([j, j + 1])
            }
        }
    }

    return anim;
}
