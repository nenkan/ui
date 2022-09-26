import Panel from '../panel.js'
import '@nenkan/css/panel.scss'

export default {
  title: 'Panel'
}

export var panel_example = function() {
  return <Panel>Lorem ipsum</Panel>
}

export const PanelExampleDanger = function() {
  return <Panel modifier="danger">Lorem ipsum danger</Panel>
}
