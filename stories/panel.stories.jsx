import React from 'react';
import Panel from '../src/panel.js';
import '@nenkan/css/panel.scss';

export default {
  title: 'Panel'
};

export const PanelExample = function() {
  return <Panel>Lorem ipsum</Panel>;
};

export const PanelExampleDanger = function() {
  return <Panel modifier="danger">Lorem ipsum danger</Panel>;
};

export const PanelExampleWarning = function() {
  return <Panel modifier="warning">Lorem ipsum warning</Panel>;
};
