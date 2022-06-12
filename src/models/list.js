import { queryFakeList, removeFakeList, addFakeList, updateFakeList, gettransaction} from '@/services/api';

export default {
  namespace: 'list',

  state: {
    list: [],
    transaction:{
      list:[]
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
    *submit({ payload }, { call, put }) {
      let callback;
      if (payload.id) {
        callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
      } else {
        callback = addFakeList;
      }
      const response = yield call(callback, payload); // post
      yield put({
        type: 'queryList',
        payload: response,
      });
    },
    *transaction({payload},{call,put}){
      const response = yield call(gettransaction,payload);
      yield put({
        type:'querytransaction',
        payload:response
      })
    }
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    querytransaction(state,action){
      return {
        ...state,
        transaction:action.payload
      }
    }
  },
};
