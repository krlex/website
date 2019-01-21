import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Template from 'templates/default'
import store from 'store'


@observer
class Landing extends Component {
  componentWillMount() {
    store.title.title = 'Landing'
  }

  handleError = () => {
    store.error.message = 'Landing'
    store.error.open = true
  }

  render() {
    return (
      <Template>

      </Template>
    )
  }
}


export default Landing
