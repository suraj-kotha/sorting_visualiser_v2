export default function insertionSort(array: number[]) {
    let arr = array.slice(0);
    let anim = []
    for (let index = 0; index < arr.length; index++) {
        if (index !== 0) {
            let currentIndex = index
            while (arr[currentIndex] < arr[currentIndex - 1]) {
                if (currentIndex === 0) break;
                [arr[currentIndex], arr[currentIndex - 1]] = [arr[currentIndex - 1], arr[currentIndex]]
                anim.push([currentIndex, currentIndex - 1]);
                currentIndex--;
            }
        }
    }
    return anim;
}

