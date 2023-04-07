import {useAppSelector} from '../hooks/use-global-state';
import {getError} from '../store/loading-data/loading-data.selectors';

export const processErrorHandle = (message: string): string|null => {
  return useAppSelector(getError)
};
