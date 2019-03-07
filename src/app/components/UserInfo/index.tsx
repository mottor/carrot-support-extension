import React, { PureComponent, ReactNode, Fragment } from 'react';
import ClickOutside from 'react-click-outside';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { getUserData } from '../../services/http/users';
import { UserPanel } from './panel';

type State = {
  isPanelActive: boolean;
  isLoading: boolean;
  data: string;
  icon: string;
}

class userInfo extends PureComponent<Params, State> {
  _icon: string = 'fa fa-info';
  _loadingIcon: string = 'fa fa-circle-o-notch fa-spin fa-fw';
  _description: string = 'Информация о пользователе';

  state: State = {
    isPanelActive: false,
    isLoading: false,
    data: '',
    icon: this._icon,
  }

  _handleClick = async () => {
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
      this.setState({isPanelActive: false, isLoading: false, data: '', icon: this._icon,}, () => {
        console.log(error);
        chrome.extension.sendRequest({type: 'alert', title: 'Ой!', message: 'Возникла ошибка при запросе'});
      });
    }
  }

  _onClickOutside = () => this.setState({isPanelActive: false, isLoading: false, data: '', icon: this._icon})

  render (): ReactNode {
    const { hovering } = this.props;
    const { icon, isPanelActive, data } = this.state;

    return (
      <Fragment>
        <ClickOutside onClickOutside={this._onClickOutside}>
          <Button
            icon={icon}
            onClick={this._handleClick}
          />
          { isPanelActive && <UserPanel data={data}/> }
        </ClickOutside>

        { hovering && <Tooltip description={this._description} /> }
      </Fragment>
    )
  }
}

export const UserInfo = withHover(userInfo);
