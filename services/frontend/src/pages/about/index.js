import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Template from 'templates/default'
import Home from '@material-ui/icons/Home'
import Call from '@material-ui/icons/Call'
import Email from '@material-ui/icons/Email'
import Chat from '@material-ui/icons/Chat'
import List from '@material-ui/icons/List'
import Paper from '@material-ui/core/Paper'
import Public from '@material-ui/icons/Public'
import InfoBox from 'components/organisms/info-box'
import Typography from '@material-ui/core/Typography'
import store from 'store'
import styles from './styles'


@observer
class About extends Component {
  state = {
    email: '',
    message: '',
  }

  componentWillMount() {
    store.title.title = 'About'
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleMessage = (event) => {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <Template>
        <InfoBox
          name="About Us"
          backgroundColor="lightblue"
        >
          <Paper style={styles.aboutText}>
            <Typography component="p" style={styles.aboutUS.typography}>
              <p>
                Tilda Center is an open space in Novi Sad, Serbia where
                people gather to share resources and knowledge, work on
                projects and develop their IT/technical solutions.
              </p>
              <p>
                It is a collaborative studio for creative individuals who
                want to enhance informal education through conversation,
                exploration and enlargement of experience.
              </p>
              <p>
                Tilda Center is a combination of a lab for personal projects,
                open workshop space and a conference room for a community
                gatherings.
              </p>
              <p>
                We encourage compelling argumentation on relevant subjects and
                learning through hands-on exploration.
              </p>
              <p>
                We embrace arts as well as the sciences, and accelerate a new
                energy that is building around multidisciplinary collaborative
                efforts.
              </p>
            </Typography>
          </Paper>
        </InfoBox>
        <InfoBox
          name="Mission/Vision"
          backgroundColor="#ffb66e"
        >
          <Paper style={styles.aboutText}>
            <Typography component="p" style={styles.aboutText.typography}>
              <h3><u>Mission Statement:</u></h3>
              <p>
                Our mission is to work for a better society by promoting
                open hardware, software, networks, data and knowledge.
              </p>
              <h3><u>Vision Statement:</u></h3>
              <p>
                Our Vision is a future where education, digital tools and
                knowledge empower people to share ideas and technical skills.
              </p>
            </Typography>
          </Paper>
        </InfoBox>
        <InfoBox
          name="Values"
          backgroundColor="#adb3c1"
        >
          <Paper style={styles.aboutText2}>
            <Typography component="p" style={styles.aboutText2.typography}>
              <p>
                In all its actions and efforts, Tilda Center is guided by
                these values
              </p>
              <h3><u>Collaboration:</u></h3>
              <p>
                Working effectively across disciplines, organizations and
                communities to combine efforts and share information in
                pursuit of shared goals;
              </p>
              <h3><u>Excellence:</u></h3>
              <p>
                Maintaining our commitment to quality and pursuit of the
                highest standards;
              </p>
              <h3><u>Innovation:</u></h3>
              <p>
                Constantly seeking and applying leading edge ideas,
                practices and knowledge;
              </p>
              <h3><u>Integrity:</u></h3>
              <p>
                Following standards and best practices for confidentiality,
                safety, protection of privacy and ethical conduct;
              </p>
              <h3><u>Passion:</u></h3>
              <p>
                Effectively translating unwavering dedication to our
                mission into practical, relevant, high quality actions
                that make a positive difference;
              </p>
              <h3><u>Respect:</u></h3>
              <p>
                Tilda Center does not discriminate on the basis of age,
                race, color, sex, national origin, religion, sexual
                orientation, gender identity, disability, marital status
                or socioeconomic status;
              </p>
            </Typography>
          </Paper>
        </InfoBox>
        <InfoBox
          name="Contacts"
          backgroundColor="#d3af37"
        >
          <Paper style={styles.contactBox}>
            <Typography>
              <Home />
              Address:
              <p>Bulevar Oslobođenja 12, 5th floor, apartment 21</p>
              <Call />
              Phone:
              <p><a href="tel:+381652474626">+381 (0) 65 2 474 626</a></p>
              <Email />
              Email:
              <p><a href="mailto:office@tilda.center">office@tilda.center</a></p>
              <Chat />
              IRC:
              <p><a href="https://webchat.freenode.net/?channels=tilda.center"> #tilda.center @ irc.freenode.net</a></p>
              <List />
              Mailing List:
              <p><a href="https://lists.tilda.center">Our Lists</a></p>
              <Public />
              Public Networks:
              <p><a href="https://facebook.com/tildacenter">Facebook</a></p>
              <p><a href="https://twitter.com/tildacenter">Twitter</a></p>
              <p><a href="https://instagram.com/tildacenter">Instagram</a></p>
            </Typography>
          </Paper>
        </InfoBox>
        <div style={styles.mapForm}>
          <iframe
            title="map"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=19.829316437244415%2C45.26147803261633%2C19.83229905366898%2C45.262544704742105&amp;layer=mapnik&amp;marker=45.26201231514193%2C19.830807745456696"
            style={styles.mapOSM}
          />
          <Paper style={styles.sendMessages}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  label="Your Email"
                  value={this.state.email}
                  type="email"
                  margin="large"
                  onChange={this.handleEmail}
                />
              </div>
              <div>
                <TextField
                  label="Your Message"
                  value={this.state.message}
                  multiline
                  rowsMax="20"
                  margin="large"
                  onChange={this.handleMessage}
                />
              </div>
              <Button style={styles.sendButton}>
                 Send
              </Button>
            </form>
          </Paper>
        </div>
      </Template>
    )
  }
}


export default About
