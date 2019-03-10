import React, { ReactElement, Fragment } from 'react';
import { Button, Tooltip } from 'app/ui';
import { withHover } from 'app/hoc';

type Props = {
  icon: string,
  onClick: () => void,
  description: string,
  hovering?: boolean,
}

const button = ({ icon, onClick, description, hovering }: Props):ReactElement<Props> => {
  return (
    <Fragment>
      <Button
        icon={icon}
        onClick={onClick} 
      />

      { hovering && <Tooltip description={description} /> }
    </Fragment>
  )
}

export const TempAccessButton = withHover(button);