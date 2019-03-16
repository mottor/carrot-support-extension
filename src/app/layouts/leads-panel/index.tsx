import React, { PureComponent, ReactNode, Fragment } from 'react';
import { Button } from 'app/ui';
import { TableParse } from 'app/utils';
import { NEW_ADMIN_URI } from 'src/config';

type State = {
  isValidLead: boolean,
};

export class LeadsPanel extends PureComponent<{}, State> {
  _name: string = 'S+';
  _sourcesWhiteList: string[] = [
    'accept.lpmotor.ru',
    'lpmotor.ru/beznal'
  ];

  state: State = {
    isValidLead: false
  }

  componentDidMount(): void {
    const table: HTMLTableElement = document.querySelector('.r_float.lead-details__block-data table');
    const data = TableParse(table);
    const sourceSiteLead: string = data['На сайте'];
    const sourcePageLead: string = data['На странице'];

    if (
      this._sourcesWhiteList.includes(sourceSiteLead) ||
      this._sourcesWhiteList.includes(sourcePageLead)
    ) {
      this.setState({ isValidLead: true })
    }
  }

  _handleClick = (): void => {
    const table: HTMLTableElement = document.querySelector('#lead_form_well1 table');
    const data = TableParse(table);
    const email: string = data['Email'];
    window.open(`${NEW_ADMIN_URI}${email}`, '_blank').focus();
  }

  render(): ReactNode {
    const { isValidLead } = this.state;
    return (
      <Fragment>
        { isValidLead && <Button onClick={this._handleClick} name={this._name} /> }
      </Fragment>
    )
  }
}
