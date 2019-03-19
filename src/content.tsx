import React from 'react';
import { render } from 'react-dom';
import { App } from 'src/app/layouts';
import 'src/styles/content.scss';

/**
 * Append container for buttons on page
 */
const container: HTMLDivElement = document.createElement('div');
container.classList.add('carrot-ext__container');
document.body.appendChild(container);

render(
  <App />,
  document.querySelector('.carrot-ext__container') as HTMLElement
);
