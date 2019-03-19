import React, { PureComponent, ReactNode, Fragment } from 'react';
import { getTempAccessLink } from 'app/services/http/users';
import { TempAccessButton } from './button';
import { TempPanel, Opts } from './panel';

type Props = {};

export class TempAccess extends PureComponent<Props, Opts> {
  _icon: string = 'fa fa-clock-o';
  _loadingIcon: string = 'fa fa-circle-o-notch fa-spin fa-fw';
  _successIcon: string = 'fa fa-check';
  _description: string = 'Выдать временный доступ';

  state: Opts = {
    isLoading: false,
    isLoaded: false,
    link: '',
    icon: this._icon,
  };

  _update = (state: Opts): void => {
    this.setState(state);
  }

  _handleClick = (): void => {
    this.setState(
      {
        isLoading: true,
        icon: this._loadingIcon,
      },
      this._request
    );
  }

  _request = async (): Promise<void> => {
    try {
      const userEmail = document.querySelector('span.email').innerHTML;
      const operatorEmail = encodeURIComponent(
        document.querySelector('.nav2-container .email').innerHTML
          .split('@')[0]
      );
      const link = await getTempAccessLink({userEmail, operatorEmail});

      this.setState({
        isLoading: false,
        isLoaded: true,
        icon: this._successIcon,
        link,
      });
    } catch (error) {
      this.setState({isLoaded: false, isLoading: false, link: '', icon: this._icon}, () => {
        console.log(error); // tslint:disable-line
        chrome.extension.sendRequest({type: 'alert', title: 'Ой!', message: 'Возникла ошибка при запросе'});
      });
    }
  }

  _onClickOutside = (): void => this.setState({ isLoading: false, isLoaded: false, icon: this._icon, link: '' });

  render (): ReactNode {
    const { icon, isLoaded, link } = this.state;

    return (
      <Fragment>
        <TempAccessButton
          onClick={this._handleClick}
          icon={icon}
          description={this._description}
        />

        {isLoaded && <TempPanel url={link} update={this._update}/>}
      </Fragment>
    );
  }
}
