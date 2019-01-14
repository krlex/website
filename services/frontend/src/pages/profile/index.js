import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'


const mapStateToProps = () => ({})


class Profile extends Component {
  componentWillMount() {
    this.props.requestTitle('Profile')
  }

  handleError = () => {
    this.props.requestError('Profile')
  }

  render() {
    return (
      <Template>
      </Template>
    )
  }
}


Profile.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  Profile,
)
