import React, { ReactElement, Fragment } from 'react';
import { withHover } from 'app/hoc';
import { Button, Tooltip } from 'app/ui';
import { NEW_ADMIN_URI } from 'src/config';

type Props = {
  hovering?: boolean,
};

const NewAdmin = ({ hovering }: Props): ReactElement<Props> => {
  const _name: string = 'S+';
  const _description: string = 'Поиск в новой админке';

  const _handleClick = (): void => {
    const email: string = document.querySelector('span.email').innerHTML;
    window.open(`${NEW_ADMIN_URI}${email}`, '_blank').focus();
  };

  return (
    <Fragment>
      <Button 
        onClick={_handleClick}
        name={_name}
      />
      {hovering && <Tooltip description={_description} />}
    </Fragment>
  );
};

export const NewAdminButton = withHover(NewAdmin);
