import Auth from 'pages/login/store'
import Blog from 'pages/blog/store'
import CfS from 'pages/cfs/store'
import Error from 'templates/empty/store'
import Gallery from 'pages/gallery/store'
import Me from 'pages/me/store'
import Title from 'templates/default/store'


export default {
  auth: new Auth(),
  blog: new Blog(),
  cfs: new CfS(),
  error: new Error(),
  gallery: new Gallery(),
  me: new Me(),
  title: new Title(),
}
