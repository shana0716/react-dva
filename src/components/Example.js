import React from 'react';
import { connect } from 'dva';

const Example = (props) => {
  return (
    <div>
      Example{props.name}
    </div>
  );
};

Example.propTypes = {
};

export default connect(({example})=>{
  return example
})(Example);;
