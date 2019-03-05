import React, { ReactElement, Fragment } from 'react';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { Copy } from '../../utils';

const copyToClipboard = ({hovering}: Params): ReactElement<any> => {
  const _icon: string = 'fa fa-copy';
  const _description: string = 'Скопировать email';

  const _handleClick = (): void => {
    const email: string = document.querySelector('span.email').innerHTML;
    Copy(email);
  }

  return (
    <Fragment>
      <Button 
        onClick={_handleClick}
        icon={_icon}
      />
      { hovering && <Tooltip description={_description} /> }
    </Fragment>
  )
}

export const CopyToClipboard = withHover(copyToClipboard);
