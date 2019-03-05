import React, { ReactElement, Fragment } from 'react';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { CARROT_LEADS_URI } from '../../../config';

const searchLeads = ({hovering}: Params): ReactElement => {
  const _name: string = 'L';
  const _description: string = 'Поиск в разделе лиды';

  const _handleClick = () => {
    const email: string = document.querySelector('span.email').innerHTML;
    window.open(`${CARROT_LEADS_URI}?user=${email}`, '_blank').focus();
  }

  return (
    <Fragment>
      <Button 
        onClick={_handleClick}
        name={_name}
      />
      { hovering && <Tooltip description={_description} /> }
    </Fragment>
  )
}

export const SearchLeads = withHover(searchLeads);
