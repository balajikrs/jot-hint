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
    <Layout title="Add Comma" description="Add Comma - Tool">
      <div className={styles.container}>
        <div className={styles.box}>
            <textarea rows="25" placeholder="Text Area 1"
             onChange={(e) => {
              setCntnt(e.target.value.split('\n'));
            }}></textarea>
        </div>
        <div className={styles.middlebox}>
            <button>→</button>
        </div>
        <div className={styles.box}>
            <textarea rows="25" placeholder="Text Area 2"
             value={formatTo72(cntnt).join('\r')}
            ></textarea>
        </div>
      </div>
    {/* </div>
      <div className={styles.iocontainer}>
        <div className={styles.ioinnercontainer}>
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
        </div>
      </div> */}
    </Layout>
  );
}
