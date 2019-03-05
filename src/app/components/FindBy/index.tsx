import React, { ReactElement, Fragment } from 'react';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { OLD_ADMIN_URI } from '../../../config';

const findBy = ({hovering}: Params): ReactElement<any> => {
  const _icon: string = 'fa fa-search';
  const _description: string = 'Поиск по email или id';

  const _handleClick = (): void => {
    const user = prompt('Введите email или id');

    if (user === null) {
      return;
    }

    window.open(`${OLD_ADMIN_URI}${user}`, '_blank').focus();
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
};


export const FindBy = withHover(findBy);
