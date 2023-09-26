import React, { useState } from 'react';
import Layout from '@theme/Layout';
// import './styles.module.css';
import styles from './styles.module.css';

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
      <div className={styles.iocontainer}>
        <div className={styles.ioinnercontainer}>
          {/* <p> */}
          {/* Edit <code>pages/helloReact.js</code> {count} and save to reload. */}
          {/* <br /> */}
          <label>Input</label>
          <textarea
            className={styles.iotextarea}
            onChange={(e) => {
              setCntnt(e.target.value.split('\n'));
            }}
          />
        </div>
        <div className={styles.ioinnercontainer}>
          <label>Output</label>
          <textarea
            className={styles.iotextarea}
            value={formatTo72(cntnt).join('\r')}
          />
          {/* <button className={styles.Button} onClick={() => setCount(count + 1)}>
            +
          </button>
          <button className={styles.Button} onClick={() => setCount(count - 1)}>
            -
          </button> */}
          {/* <button onClick={addcount()}>increment</button> */}
          {/* </p> */}
        </div>
      </div>
    </Layout>
  );
}
