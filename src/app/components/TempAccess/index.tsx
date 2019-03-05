import React, { PureComponent, ReactNode, Fragment } from 'react';
import ClickOutside from 'react-click-outside';
import { withHover, Params } from '../../hoc/withHover';
import { Button, Tooltip } from '../../ui';
import { getTempAccessLink } from '../../services/http/users';
import { TempPanel } from './panel';

type State = {
  isLoading: boolean,
  isLoaded: boolean,
  link: string,
  icon: string,
}

class tempAccess extends PureComponent<Params, State> {
  _icon: string = 'fa fa-clock-o';
  _loadingIcon: string = 'fa fa-circle-o-notch fa-spin fa-fw';
  _successIcon: string = 'fa fa-check';
  _description: string = 'Выдать временный доступ';

  state = {
    isLoading: false,
    isLoaded: false,
    link: '',
    icon: this._icon,
  }

  _update = (state: State) => {
    this.setState(state);
  }

  _handleClick = () => {
    this.setState({
      isLoading: true,
      icon: this._loadingIcon,
    }, this._request);
  }

  _request = async () => {
    try {
      const userEmail = document.querySelector('span.email').innerHTML;
      const operatorEmail = encodeURIComponent(document.querySelector('.nav2-container .email').innerHTML.split('@')[0]);
      const link = await getTempAccessLink({userEmail, operatorEmail})

      this.setState({
        isLoading: false,
        isLoaded: true,
        icon: this._successIcon,
        link,
      });
    } catch (error) {
      this.setState({isLoaded: false, isLoading: false, link: '', icon: this._icon}, () => {
        console.log(error);
        chrome.extension.sendRequest({type: 'alert', title: 'Ой!', message: 'Возникла ошибка при запросе'});
      });
    }
  }

  render (): ReactNode {
    const { hovering } = this.props;
    const { icon, isLoaded, link } = this.state;

    return (
      <Fragment>
        <ClickOutside onClickOutside={
          () => this.setState({
            isLoading: false,
            isLoaded: false,
            icon: this._icon,
            link: ''
          })}>
          <Button
            onClick={this._handleClick}
            icon={icon}
          />
          { isLoaded && <TempPanel url={link} update={this._update}/> }
        </ClickOutside>

        { hovering && <Tooltip description={this._description} /> }
      </Fragment>
    )
  }
}

export const TempAccess = withHover(tempAccess);
