import React, { useState } from 'react';
import './style.css';

function Calculator() {
    // Addition
    const [addOne, setAddOne] = useState(0);
    const [addTwo, setAddTwo] = useState(0);
    const [totalSum, setTotalSum] = useState(addOne + addTwo);

    function sum() {
        setTotalSum(addOne + addTwo);
    };

    // Subtraction
    const [subOne, setSubOne] = useState(0);
    const [subTwo, setSubTwo] = useState(0);
    const [totalSub, setTotalSub] = useState(subOne - subTwo);

    function subtract() {
        setTotalSub(subOne - subTwo);
    };
    
    // Multiplication
    const [multiplyOne, setMultiplyOne] = useState(0);
    const [multiplyTwo, setMultiplyTwo] = useState(0);
    const [totalMultiply, setTotalMultiply] = useState(multiplyOne * multiplyTwo);

    function multiply() {
        setTotalMultiply(multiplyOne * multiplyTwo);
    };
    
    // Division
    const [divideOne, setDivideOne] = useState(0);
    const [divideTwo, setDivideTwo] = useState(0);
    const [totalDivide, setTotalDivide] = useState(divideOne / divideTwo);

    function divide() {
        setTotalDivide(divideOne / divideTwo);
    };

    return (
        <div>
            <h1 className="tableCap">
                React Calculator
            </h1>
            <p className="tableRule">
                Click the '=' button for the answer!
            </p>
            <table border="1">

                <tbody>
                    <td>
                        <p>Add:</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={addOne}
                            onChange={e => setAddOne(+e.target.value)}
                        />
                    </td>
                    <td>
                        <p>+</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={addTwo}
                            onChange={e => setAddTwo(+e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={sum}>=</button> <input type="number" id="sum" value={totalSum} readOnly />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>Subtract:</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={subOne}
                            onChange={e => setSubOne(+e.target.value)}
                        />
                    </td>
                    <td>
                        <p>-</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={subOne}
                            onChange={e => setSubTwo(+e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={subtract}>=</button> <input type="number" id="dif" value={totalSub} readOnly />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>Multiply:</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={multiplyOne}
                            onChange={e => setMultiplyOne(+e.target.value)}
                        />
                    </td>
                    <td>
                        <p>x</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={multiplyTwo}
                            onChange={e => setMultiplyTwo(+e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={multiply}>=</button> <input type="number" id="multiply" value={totalMultiply} readOnly />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>Divide:</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={divideOne}
                            onChange={e => setDivideOne(+e.target.value)}
                        />
                    </td>
                    <td>
                        <p>÷</p>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={divideTwo}
                            onChange={e => setDivideTwo(+e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={divide}>=</button> <input type="number" id="divide" value={totalDivide} readOnly />
                    </td>
                </tbody>


            </table>
        </div>
    );
}

export default Calculator;