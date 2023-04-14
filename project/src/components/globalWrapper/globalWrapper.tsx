
import NotLoaded from '../../components/common/not-loaded/not-loaded';
import {PropsWithChildren} from 'react';
import Header from '../../components/common/header/header';
import {useAppSelector} from '../../hooks/use-global-state';
import {getError} from '../../store/loading-data/loading-data.selectors';

type GWProps = PropsWithChildren<{classes: string}>;

export const GlobalWrapper = ({children, classes}: GWProps): JSX.Element => {
  const error = useAppSelector(getError);
  return (
    <div className={ classes }>
      <Header/>
      { children }
      {error && <NotLoaded error={error}/>}
    </div>
  );
};
export default GlobalWrapper;
