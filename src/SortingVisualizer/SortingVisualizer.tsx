import React from 'react'
import './SortingVisualizer.scss'
import selectionSort from "./SelectionSort";
import bubbleSort from "./BubbleSort";
import insertionSort from "./InsertionSort";
import quickSortPublic from "./QuickSort";
import getColor from "./Color";
import {delayExecutionInMs, generateRandomNumbersInTheRange, getBarHeight, getBarWidth} from "./Util";
import {SortingType} from "./SortingType";
import {paraMap} from "./Statics";

let DELAY = 1000
let SHOULD_CANCEL = false
let sortingAlgo: SortingType;

if (process.env!.NODE_ENV === "development") {
    DELAY = 0
}

interface IProps {

}

interface IState {
    givenArray: number[],
    previousChange: number[],
    isCodeInExecution: boolean,
    arraySize: number,
    currentAlgorithm: string
}

export default class SortingVisualizer extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);
        this.state = {
            givenArray: [],
            previousChange: [],
            isCodeInExecution: false,
            arraySize: 10,
            currentAlgorithm: "default"
        };
    }

    componentDidMount() {
        this.reset();
    }

    generateNewArray() {
        this.reset();
    }

    reset() {
        let isCodeInExecution = false
        const givenArray: number[] = [];
        const previousChange: number[] = [];
        for (let i = 0; i < this.state.arraySize; i++) givenArray.push(generateRandomNumbersInTheRange(8, 990));
        SHOULD_CANCEL = true
        this.setState({givenArray, previousChange, isCodeInExecution});
    }

    async handleArraySizeChange(updatedNumber: number) {
        await this.setState({arraySize: updatedNumber})
        this.reset()
    }

    async sortArrayWithAlgorithimicAnimations(algorithm: SortingType) {
        SHOULD_CANCEL = false
        let isCodeInExecution = true
        this.setState({isCodeInExecution})
        let sortedArrayAnim = algorithm(this.state.givenArray);
        let givenArray = this.state.givenArray;
        let previousChange = this.state.previousChange;

        for (let index = 0; index < sortedArrayAnim.length; index++) {
            if (!SHOULD_CANCEL) {
                if (algorithm === selectionSort) {
                    const [i, j, swap] = sortedArrayAnim[index];
                    if (swap) [givenArray[i], givenArray[j]] = [givenArray[j], givenArray[i]]
                    previousChange.push(i, j);
                } else {
                    const [i, j] = sortedArrayAnim[index];
                    [givenArray[i], givenArray[j]] = [givenArray[j], givenArray[i]]
                    previousChange.push(i, j);
                }


                if (index === sortedArrayAnim.length - 1) {
                    previousChange.push(givenArray.length + 1, givenArray.length + 1);
                    this.setState({previousChange});
                }

                this.setState({givenArray, previousChange});
                await delayExecutionInMs(DELAY);
            }
        }
        isCodeInExecution = false
        this.setState({isCodeInExecution})
    }


    render() {
        return (
            <div className="main-div" id="center-div">
                <div className="center-div-keep-width" id="items-div">
                    {this.state.givenArray.map((height, index) => (
                        <div className="array-item" key={index} style={{
                            backgroundColor: getColor(index, this.state.previousChange),
                            height: getBarHeight(height),
                            width: getBarWidth(this.state.arraySize)
                        }}>

                        </div>
                    ))}
                </div>
                <div className="center-div-keep-width" id="buttons-div">
                    <button onClick={() => {
                        this.generateNewArray()
                        this.setState({
                            currentAlgorithm: "default"
                        })
                    }}>Generate array ( new )
                    </button>
                    <button disabled={this.state.isCodeInExecution}
                            onClick={() => {
                                sortingAlgo = bubbleSort
                                this.setState({
                                    currentAlgorithm: "bubbleSort"
                                })
                                this.sortArrayWithAlgorithimicAnimations(sortingAlgo)
                            }}>Bubble Sort
                    </button>
                    <button disabled={this.state.isCodeInExecution}
                            onClick={() => {
                                sortingAlgo = insertionSort
                                this.setState({
                                    currentAlgorithm: "insertionSort"
                                })
                                this.sortArrayWithAlgorithimicAnimations(sortingAlgo)
                            }}>Insertion Sort
                    </button>
                    <button disabled={this.state.isCodeInExecution}
                            onClick={() => {
                                sortingAlgo = selectionSort
                                this.setState({
                                    currentAlgorithm: "selectionSort"
                                })
                                this.sortArrayWithAlgorithimicAnimations(sortingAlgo)
                            }}>Selection Sort
                    </button>
                    <button disabled={this.state.isCodeInExecution}
                            onClick={() => {
                                sortingAlgo = quickSortPublic
                                this.setState({
                                    currentAlgorithm: "quickSort"
                                })
                                this.sortArrayWithAlgorithimicAnimations(sortingAlgo)
                            }}>Quick Sort
                    </button>
                </div>
                <div className="center-div-keep-width">
                    <p>{this.state.arraySize}</p>
                    <input
                        type="range"
                        min="10"
                        max="150"
                        disabled={this.state.isCodeInExecution}
                        value={this.state.arraySize}
                        onChange={(event) => {
                            this.handleArraySizeChange(event.target.valueAsNumber)
                        }}
                    />
                </div>

                <div className="center-div-keep-width">

                    <p dangerouslySetInnerHTML={{__html: this.replaceWithBr(paraMap.get(this.state.currentAlgorithm) as string)}}/>

                </div>

            </ div>
        );
    }

    replaceWithBr(value: string) {
        return value.replace(/\n/g, "<br />")
    }

}

