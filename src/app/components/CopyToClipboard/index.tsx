import React, { ReactElement, Fragment } from 'react';
import { withHover } from 'app/hoc';
import { Button, Tooltip } from 'app/ui';
import { Copy } from 'app/utils';

type Props = {
  hovering?: boolean,
}

const copyToClipboard = ({ hovering }: Props): ReactElement<Props> => {
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
