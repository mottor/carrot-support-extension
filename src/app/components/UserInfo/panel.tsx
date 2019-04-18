import React, { ReactElement } from 'react';
import './style.scss';

type Props = {
  data?: string;
};

export const UserPanel = ({data}: Props): ReactElement<Props> => {
  const parsedData = () => data.split('\n').map(el => el.trim());

  return (
    <div className="user-info__panel">
      { parsedData().map((element, idx) => (
        <div key={idx} dangerouslySetInnerHTML={{__html: element }} />
      )) }
    </div>
  );
};
