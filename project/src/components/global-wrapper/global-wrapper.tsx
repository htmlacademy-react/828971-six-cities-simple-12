import React, { PropsWithChildren } from 'react';
import Header from '../common/header/header';

function GlobalWrapper({children} : PropsWithChildren) {

  return (
    <div className="page page--gray page--main">
      <Header/>
      {children}
    </div>
  );
}

export default GlobalWrapper;
