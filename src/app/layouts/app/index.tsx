import React, { PureComponent, Fragment, ReactNode } from 'react';
import { 
  OldAdminButton,
  NewAdminButton,
  SitesList,
  FindBy,
  CopyToClipboard,
  TempAccess,
  UserInfo,
  SearchLeads
} from 'app/components';

export class App extends PureComponent {
  componentDidCatch(): void {
    chrome.extension.sendRequest({type: 'alert', title: 'Ой!', message: 'Возникла неотловленная ошибка'});
  }

  render(): ReactNode {
    return (
      <Fragment>
        <OldAdminButton />
        <NewAdminButton />
        <SitesList />
        <FindBy />
        <CopyToClipboard />
        <TempAccess />
        <UserInfo />
        <SearchLeads />
      </Fragment>
    )
  }
}
