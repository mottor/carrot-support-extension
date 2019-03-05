import React, { ReactElement } from 'react';

type Props = {
  className: string,
}

export const Icon = ({className}: Props): ReactElement<any> => (
  <i className={className}></i>
);
