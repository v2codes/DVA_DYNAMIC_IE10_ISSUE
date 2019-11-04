import { getInfo, getInfoList } from '@/services/info';

export default {
  namespace: 'infomodel',
  state: {
    info: null, // info
    infoList: null, // list
  },
  effects: {
    *getInfo({ payload }, { call, put }) {
      const resp = yield call(getInfo, payload);
      yield put({
        type: 'saveInfo',
        payload: resp,
      })
      return resp;
    },
    *getInfoList({ payload }, { call, put }) {
      const resp = yield call(getInfoList, payload);
      yield put({
        type: 'saveInfoList',
        payload: resp,
      })
      return resp;
    },
  },
  reducers: {
    saveInfo(state, { payload }) {
      return {
        ...state,
        info: payload,
      }
    },
    saveInfoList(state, { payload }) {
      return {
        ...state,
        infoList: payload,
      }
    }
  }
}
