import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { observer } from 'mobx-react'
import Template from 'templates/default'
import store from 'store'
import me from './me.jpeg'
import styles from './styles'


@observer
class Profile extends Component {
  state = {
    firstName: 'Krstan',
    lastName: 'Vjestica',
    email: 'krle@tilda.center',
    Avatar: me,
  }

  componentWillMount() {
    store.title.title = 'Profile'
  }

  handleError = () => {
    store.error.message = 'Profile'
    store.error.open = true
  }

  render() {
    return (
      <Template>
        <div>
          <Avatar src={this.state.Avatar} style={styles.bigAvatar} />
          <p>{this.state.firstName} {this.state.lastName}</p>
          <p>{this.state.email}</p>
        </div>
      </Template>
    )
  }
}


export default Profile
