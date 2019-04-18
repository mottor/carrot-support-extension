import React, { ReactElement, Fragment } from 'react';
import { withHover } from 'app/hoc';
import { Button, Tooltip } from 'app/ui';
import { Copy } from 'app/utils';

type Props = {
  hovering?: boolean,
};

const copyToClipboard = ({ hovering }: Props): ReactElement<Props> => {
  const icon: string = 'fa fa-copy';
  const description: string = 'Скопировать email';

  const handleClick = (): void => {
    const email: string = document.querySelector('span.email').innerHTML;
    Copy(email);
  };

  return (
    <Fragment>
      <Button 
        onClick={handleClick}
        icon={icon}
      />
      {hovering && <Tooltip description={description} />}
    </Fragment>
  );
};

export const CopyToClipboard = withHover(copyToClipboard);
