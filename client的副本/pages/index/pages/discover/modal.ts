import { qnrSubmit } from './server';
import get from 'lodash/get'

export default {
	namespace: 'discover',
	state: {
		successModal:false,
		percent:0,
	},
	reducers: {
		update(state, { payload }) {
			return { ...state, ...payload }
		}
	},
	effects: {
		* patch({ payload }, { put, select, call }) {
			const { result, code } = yield call(qnrSubmit, payload.list);
			return { result, code };
		},
	}
}