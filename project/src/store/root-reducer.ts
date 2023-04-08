import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants';
import {userProcess} from './user-process/user-process.slice';
import {loadingData} from './loading-data/loading-data.slice';
import {outputData} from './output-data/output-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: loadingData.reducer,
  [NameSpace.OutputData]: outputData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
