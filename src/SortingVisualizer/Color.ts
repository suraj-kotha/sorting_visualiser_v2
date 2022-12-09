const RED = '#FF0000';
const GREEN = '#00FF00';
const BLUE = '#0000FF';


export default function getColor(index: number, previousChange: number[]) {

    if (previousChange.includes(index)) {
        if (index === previousChange[previousChange.length - 1] || index === previousChange[previousChange.length - 2]) {
            return GREEN;
        } else {
            return BLUE;
        }
    } else {
        return RED;
    }

}
