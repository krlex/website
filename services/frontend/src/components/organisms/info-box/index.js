import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import store from 'store'
import getStyles from './styles'


@observer
class InfoBox extends React.Component {
  handleClick = () => {
    const focused = this.props.name === store.about.focused
      ? ''
      : this.props.name
    store.about.focused = focused
  }

  render() {
    const styles = getStyles(this.props.backgroundColor)
    const rootStyle = this.props.name === store.about.focused
      ? styles.ibox.focused
      : styles.ibox
    return (
      <Paper style={rootStyle}>
        <Toolbar onClick={this.handleClick} style={styles.toolbar}>
          <div>
            {this.props.name}
          </div>
        </Toolbar>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </Paper>
    )
  }
}


InfoBox.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  name: PropTypes.string.isRequired,
}


export default InfoBox
