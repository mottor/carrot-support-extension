import React, { ReactElement, Fragment } from 'react';
import { withHover } from 'app/hoc';
import { Button, Tooltip } from 'app/ui';
import { CARROT_LEADS_URI } from 'src/config';

type Props = {
  hovering?: boolean,
};

const searchLeads = ({hovering}: Props): ReactElement<Props> => {
  const _name: string = 'L';
  const _description: string = 'Поиск в разделе лиды';

  const _handleClick = () => {
    const email: string = document.querySelector('span.email').innerHTML;
    window.open(`${CARROT_LEADS_URI}?user=${email}`, '_blank').focus();
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

export const SearchLeads = withHover(searchLeads);
