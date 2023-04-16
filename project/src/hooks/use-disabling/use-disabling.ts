import {useEffect, useState} from 'react';
import {useAppSelector} from '../use-global-state';
import {getIsSending} from '../../store/user-process/user-process.selectors';

export const useDisabling = (isValidate?: boolean | undefined) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const isSending = useAppSelector(getIsSending);

  useEffect( () => {
    if (isSending || (isValidate === false)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isSending, isValidate]);

  return isDisabled;
};
