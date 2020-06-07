import React,{useState} from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from '../components/Example';
import {Button, Input} from 'antd';

function IndexPage(props) {
  console.log(props,333)
  const [name,setName] = useState('333');
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      {props.name}
      <p>{name}</p>
      <Input value={name} onChange={(e)=>{
        setName(e.target.value)
      }}/>
      <Button onClick={()=>{
        props.dispatch({
          type: 'example/change',
          payload: {name:name},
        })
      }}>改变</Button>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({example})=>{
  return example
})(IndexPage);
