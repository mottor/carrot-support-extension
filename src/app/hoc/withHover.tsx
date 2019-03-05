import React, { PureComponent } from 'react';

export type Params = {
  hovering: boolean,
}

export const withHover = Component => {
  return class withHover extends PureComponent<{}, Params> {
    state: Params = { hovering: false }
    _mouseOver = () => this.setState({ hovering: true })
    _mouseOut = () => this.setState({ hovering: false })
    
    render () {
      const props = {
        hovering: this.state.hovering,
        ...this.props,
      };

      return (
        <div className="carrot-ext__container--hoverable" onMouseOver={this._mouseOver} onMouseOut={this._mouseOut}>
          <Component {...props} />
        </div>
      )
    }
  }
}