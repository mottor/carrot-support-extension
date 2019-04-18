import React from 'react';
import { render } from 'react-dom';
import { LeadsPanel } from './app/layouts';
import 'src/styles/leads-panel.scss';

/**
 * Append container for buttons on page
 */
const container: HTMLElement = document.querySelector('#lead_form_well1') as HTMLElement;

if (container) {
  container.style.position = 'relative';
  const panelContainer: HTMLDivElement = document.createElement('div');
  panelContainer.classList.add('carrot-ext__leads-panel');
  container.appendChild(panelContainer);

  render(
    <LeadsPanel />,
    panelContainer
  );
}
