import React, { PureComponent, ComponentType, ReactNode } from 'react';

type State = {
  hovering?: boolean,
};

type OnChangeNative = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  hovering?: boolean,
  description?: string,
  icon?: string,
  onClick?: () => void
};

type OnChangeHoFProps = {
  hovering?: boolean,
  onChange?: (value: string) => void;
};

export function withHover<T extends OnChangeNative> (Component: ComponentType<T>) {
  return class WithHover extends PureComponent<OnChangeHoFProps & T, State> {
    state: State = { hovering: false };
    _mouseOver = (): void => this.setState({ hovering: true });
    _mouseOut = (): void => this.setState({ hovering: false });
    
    render(): ReactNode {
      const props = {
        hovering: this.state.hovering,
        ...this.props,
      };

      return (
        <div className="carrot-ext__container--hoverable" onMouseOver={this._mouseOver} onMouseOut={this._mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}