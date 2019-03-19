import React, { ReactElement } from 'react';
import { Icon } from '../Icon';
import './style.scss';

type Props = {
  icon?: string,
  name?: string,
  onClick: () => void,
};

export const Button = ({ name, icon, onClick }: Props): ReactElement<Props> => (
  <button onClick={() => onClick()} className="carrot-ext__button">
    {icon ? <Icon className={icon} /> : name}
  </button>
);
