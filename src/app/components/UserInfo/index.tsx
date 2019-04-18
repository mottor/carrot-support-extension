import React, { PureComponent, ReactNode, Fragment } from 'react';
import ClickOutside from 'react-click-outside';
import { getUserData } from 'app/services/http/users';
import { UserInfoButton } from './button';
import { UserPanel } from './panel';

type Props = {};

type State = {
  isPanelActive: boolean;
  isLoading: boolean;
  data: string;
  icon: string;
};

export class UserInfo extends PureComponent<Props, State> {
  _icon: string = 'fa fa-info';
  _loadingIcon: string = 'fa fa-circle-o-notch fa-spin fa-fw';
  _description: string = 'Информация о пользователе';

  state: State = {
    isPanelActive: false,
    isLoading: false,
    data: '',
    icon: this._icon,
  };

  _handleClick = async (): Promise<void> => {
    if (this.state.isPanelActive) {
      await this.setState({ isPanelActive: false });
      return;
    }

    try {
      await this.setState({ isLoading: true, icon: this._loadingIcon });
      const userEmail = encodeURIComponent(document.querySelector('span.email').innerHTML);
      const data = await getUserData({ userEmail });
      this.setState({ isLoading: false, isPanelActive: true, data, icon: this._icon });
    } catch (error) {
      this.setState({ isPanelActive: false, isLoading: false, data: '', icon: this._icon }, () => {
        console.log(error); // tslint:disable-line
        chrome.extension.sendRequest({type: 'alert', title: 'Ой!', message: 'Возникла ошибка при запросе'});
      });
    }
  }

  _onClickOutside = (): void => this.setState({isPanelActive: false, isLoading: false, data: '', icon: this._icon});

  render (): ReactNode {
    const { icon, isPanelActive, data } = this.state;

    return (
      <Fragment>
        <ClickOutside onClickOutside={this._onClickOutside}>
          <UserInfoButton 
            icon={icon}
            onClick={this._handleClick}
            description={this._description}
          />
          {isPanelActive && <UserPanel data={data}/>}
        </ClickOutside>
      </Fragment>
    );
  }
}
