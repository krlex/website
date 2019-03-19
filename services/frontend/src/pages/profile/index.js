import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { observer } from 'mobx-react'
import Template from 'templates/default'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import store from 'store'
import styles from './styles'
import me from './me.jpeg'


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
        <div style={styles.ProfCenter}>
          <Paper>
            <Avatar src={this.state.Avatar} style={styles.bigAvatar} />
            <Typography variant="h5">
              <p>{store.me.detail.firstName} {store.me.detail.lastName}</p>
              <p>{store.me.detail.email}</p>
            </Typography>
          </Paper>
        </div>
      </Template>
    )
  }
}


export default Profile
