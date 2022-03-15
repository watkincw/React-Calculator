import React from 'react';

function Calculator() {
    let sum = () => {
        // get first and second input value
        let num1 = Number(document.getElementById('addOne').value);
        let num2 = Number(document.getElementById('addTwo').value);

        // if either field is blank, tell them they cant be
        if (num1 === '' || num2 === '') {
            // get, or in other words 'target' or 'select', the hidden div on line ~112 with the ID of 'hidden'. The div is hidden using CSS. Check the CSS file to see how I did this with the 'hide' className
            let hidden = document.getElementById('hidden');

            // remove 'hide' className from list of classNamees the div has assigned to it
            hidden.classNameList.remove('hide');
            
            // setTimeout(function(), delay in milliseconds) delays what comes next before moving forward with the rest of the function, then completes a task specified with another function after the specified time 
            setTimeout(function() {
                // re-add 'hide' className to list of classNamees the div has assigned to it after 3000 milliseconds(specified at the end of the function)
                hidden.classNameList.add('hide');
            }, 3000);

            // 'return' exits the entire sum fuction, not allowing what comes next to execute
            return
        }

        // add them together
        let total = num1 + num2;
        let result;
        // round to 2 decimal places, if neccessary
        result = Math.round(total*100)/100;

        // dispaly sum in results box
        document.getElementById('sum').value = result;
    }

    let dif = () => {
        // get first and second input value
        let num1 = Number(document.getElementById('subtractOne').value);
        let num2 = Number(document.getElementById('subtractTwo').value);

        // if either field is blank, tell them they cant be
        if (num1 === '' || num2 === '') {
            // get, or in other words 'target' or 'select', the hidden div on line ~112 with the ID of 'hidden'. The div is hidden using CSS. Check the CSS file to see how I did this with the 'hide' className
            let hidden = document.getElementById('hidden');

            // remove 'hide' className from list of classNamees the div has assigned to it
            hidden.classNameList.remove('hide');
            
            // setTimeout(function(), delay in milliseconds) delays what comes next before moving forward with the rest of the function, then completes a task specified with another function after the specified time 
            setTimeout(function() {
                // re-add 'hide' className to list of classNamees the div has assigned to it after 3000 milliseconds(specified at the end of the function)
                hidden.classNameList.add('hide');
            }, 3000);

            // 'return' exits the entire sum fuction, not allowing what comes next to execute
            return
        }

        // subtract
        let total = num1 - num2;
        let result;
        // round to 2 decimal places, if neccessary
        result = Math.round(total*100)/100;

        // dispaly sum in results box
        document.getElementById('dif').value = result;
    }

    let multiply = () => {
        // get first and second input value
        let num1 = Number(document.getElementById('multiplyOne').value);
        let num2 = Number(document.getElementById('multiplyTwo').value);

        // if either field is blank, tell them they cant be
        if (num1 === '' || num2 === '') {
            // get, or in other words 'target' or 'select', the hidden div on line ~112 with the ID of 'hidden'. The div is hidden using CSS. Check the CSS file to see how I did this with the 'hide' className
            let hidden = document.getElementById('hidden');

            // remove 'hide' className from list of classNamees the div has assigned to it
            hidden.classNameList.remove('hide');
            
            // setTimeout(function(), delay in milliseconds) delays what comes next before moving forward with the rest of the function, then completes a task specified with another function after the specified time 
            setTimeout(function() {
                // re-add 'hide' className to list of classNamees the div has assigned to it after 3000 milliseconds(specified at the end of the function)
                hidden.classNameList.add('hide');
            }, 3000);

            // 'return' exits the entire sum fuction, not allowing what comes next to execute
            return
        }

        // multiply
        let total = num1 * num2;
        let result;
        // round to 2 decimal places, if neccessary
        result = Math.round(total*100)/100;

        // dispaly total in results box
        document.getElementById('multiply').value = result;
    }

    let divide = () => {
        // get first and second input value
        let num1 = Number(document.getElementById('divideOne').value);
        let num2 = Number(document.getElementById('divideTwo').value);

        // if either field is blank, tell them they cant be
        if (num1 === '' || num2 === '') {
            // get, or in other words 'target' or 'select', the hidden div on line ~112 with the ID of 'hidden'. The div is hidden using CSS. Check the CSS file to see how I did this with the 'hide' className
            let hidden = document.getElementById('hidden');

            // remove 'hide' className from list of classNamees the div has assigned to it
            hidden.classNameList.remove('hide');
            
            // setTimeout(function(), delay in milliseconds) delays what comes next before moving forward with the rest of the function, then completes a task specified with another function after the specified time 
            setTimeout(function() {
                // re-add 'hide' className to list of classNamees the div has assigned to it after 3000 milliseconds(specified at the end of the function)
                hidden.classNameList.add('hide');
            }, 3000);

            // 'return' exits the entire sum fuction, not allowing what comes next to execute
            return
        }

        // divide
        let total = num1 / num2;
        let result;
        // round to 2 decimal places, if neccessary
        result = Math.round(total*100)/100;

        // dispaly sum in results box
        document.getElementById('divide').value = result;
    }

    return (
        <div>
            <h1 className="tableCap">
                Simple Calculator
            </h1>
            <p className="tableRule">
                Click the '=' button for the answer!
            </p>
            <table border="1">

                <tbody>
                    <td>
                        <p>
                            Add:
                        </p>
                    </td>
                    <td>
                        <input type="number" id="addOne" />
                    </td>
                    <td>
                        <p>
                            +
                        </p>
                    </td>
                    <td>
                        <input type="number" id="addTwo" />
                    </td>
                    <td>
                        <button onClick={sum}>=</button> <input type="number" id="sum" />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>
                            Subtract: 
                        </p>
                    </td>
                    <td>
                        <input type="number" id="subtractOne" />
                    </td>
                    <td>
                        <p>
                            -
                        </p>
                    </td>
                    <td>
                        <input type="number" id="subtractTwo" />
                    </td>
                    <td>
                        <button onClick={dif}>=</button> <input type="number" id="dif" />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>
                            Multiply:
                        </p>
                    </td>
                    <td>
                        <input type="number" id="multiplyOne" />
                    </td>
                    <td>
                        <p>
                            x
                        </p>
                    </td>
                    <td>
                        <input type="number" id="multiplyTwo" />
                    </td>
                    <td>
                        <button onClick={multiply}>=</button> <input type="number" id="multiply" />
                    </td>
                </tbody>

                <tbody>
                    <td>
                        <p>
                            Divide:
                        </p>
                    </td>
                    <td>
                        <input type="number" id="divideOne" />
                    </td>
                    <td>
                        <p>
                            ÷
                        </p>
                    </td>
                    <td>
                        <input type="number" id="divideTwo" />
                    </td>
                    <td>
                        <button onClick={divide}>=</button> <input type="number" id="divide" />
                    </td>
                </tbody>


            </table>
        </div>
    );
}

export default Calculator;