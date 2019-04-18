import React, { ReactElement } from 'react';
import './style.scss';

type Props = {
  description: string,
};

export const Tooltip = ({ description }: Props): ReactElement<Props> => {
  return (
    <div className="carrot-ext__tooltip">
      {description}
    </div>
  );
};
