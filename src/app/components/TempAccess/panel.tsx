import React, { ReactElement, useRef } from 'react';
import { Copy } from 'app/utils';
import './style.scss';

export type Opts = {
  isLoaded: boolean,
  isLoading: boolean,
  icon: string,
  link: string,
};

type Props = {
  url: string,
  update: (opts: Opts) => void,
};

export const TempPanel = ({url, update}: Props): ReactElement<Props> => {
  const input = useRef(null);

  const _copyHandler = (): void => {
    const data: string = input.current.value;
    Copy(data);
    update({ link: '', isLoaded: false, isLoading: false, icon: 'fa fa-clock-o' });
  };

  return (
    <div className="temp-access__panel">
      <input 
        className="temp-access__input"
        value={url}
        ref={input}
      />
      <button 
        className="temp-access__button"
        onClick={_copyHandler}
      >
        Copy
      </button>
    </div>
  );
};
