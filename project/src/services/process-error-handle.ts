import {store} from '../store';

import {clearErrorAction} from '../store/api-actions';
import {loadingData} from '../store/loading-data/loading-data.slice';

export const processErrorHandle = (message: string): void => {
  store.dispatch(loadingData.actions.setError(message));
  store.dispatch(clearErrorAction());
};
