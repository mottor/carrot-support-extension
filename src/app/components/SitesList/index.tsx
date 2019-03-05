import React, { ReactElement, Fragment } from 'react';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { SITES_LIST_URI } from '../../../config';

const sitesList = ({hovering}: Params): ReactElement<any> => {
  const _icon: string = 'fa fa-list-alt';
  const _description: string = 'Перейти в список сайтов пользователя';

  const _handleClick = (): void => {
    const userId: string = document.querySelector('.prop-value[ng-bind *= user_id]').innerHTML;
    window.open(`${SITES_LIST_URI}${userId}`, '_blank').focus();
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

export const SitesList = withHover(sitesList);
