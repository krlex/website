import About from 'pages/about/store'
import Auth from 'pages/login/store'
import Blog from 'pages/blog/store'
import Error from 'templates/empty/store'
import Gallery from 'pages/gallery/store'
import Me from 'pages/me/store'
import Title from 'templates/default/store'


export default {
  about: new About(),
  auth: new Auth(),
  blog: new Blog(),
  error: new Error(),
  gallery: new Gallery(),
  me: new Me(),
  title: new Title(),
}
