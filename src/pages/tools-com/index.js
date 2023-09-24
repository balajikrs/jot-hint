import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Hello(props) {
  const [count, setCount] = useState(9898);
  const [cntnt, setCntnt] = useState(['test', 'this', 'data']);

  var formatedData = [];
  var singleQuote = "'";
  var comma = ',';
  // function addcount() {
  //   setCount(count + 1);
  // }
  const addComma = (rawText) => (rawText != '' ? `${rawText}${comma}` : '');
  const formatTo72 = (inputArray) => {
    var modifiedData = [];
    modifiedData = inputArray.map((rawText) => addComma(rawText.trim()));
    let outputArray = [];
    let i = 0;
    let z = inputArray[i].length;
    let maxLength = 72;
    // console.log(z);
    outputArray = modifiedData.reduce(
      (previousValue, currentValue, CurrentIndex, fullArray) => {
        if (previousValue.length == 0) {
          previousValue.push(currentValue);
        } else {
          if (
            previousValue[previousValue.length - 1].length +
              currentValue.length >
            72
          ) {
            previousValue.push(currentValue);
          } else {
            previousValue[previousValue.length - 1] =
              previousValue[previousValue.length - 1] + currentValue;
          }
        }
        return previousValue;
      },
      []
    );
    return outputArray;
  };
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> {count} and save to reload.
          <br />
          <label>Input</label>
          <textarea
            onChange={(e) => {
              setCntnt(e.target.value.split('\n'));
            }}
          />
          <label>Output</label>
          <textarea value={formatTo72(cntnt).join('\r')} />
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {/* <button onClick={addcount()}>increment</button> */}
        </p>
      </div>
    </Layout>
  );
}
