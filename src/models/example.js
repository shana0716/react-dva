
export default {

  namespace: 'example',

  state: {
    name:'shana'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *change({ payload }, { call, put }) {  // eslint-disable-line
      console.log(payload)
      yield put({ type: 'save',payload});
    }
  },

  reducers: {
    save(state, action) {
      console.log(action.payload)
      return { ...state, ...action.payload };
    },
  },

};
