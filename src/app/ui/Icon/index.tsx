import React, { ReactElement } from 'react';

type Props = {
  className: string,
};

export const Icon = ({ className }: Props): ReactElement<Props> => (
  <i className={className} />
);
