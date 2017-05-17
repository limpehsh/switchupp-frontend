import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

// application routes
const routes = [
  { path: '*', component: load('Error404') }, // For pages that do not exist
  {
    path: '/',                // Used to initialise default layout
    component: load('Index'), // Header, Left Sidebar, Footer
    children: [
      { path: '/', component: load('Feed') },
      { path: '/about-us', component: load('AboutUs') },
      { path: '/feed', component: load('Feed') },
      { path: '/map', component: load('Map') },
      { path: '/my-posts', component: load('UserPosts') }, // might remove
      { path: '/report', component: load('Report') },
      { path: '/settings', component: load('Settings') },
      { path: '/sign-in', component: load('SignIn') },
      { path: '/sign-up', component: load('SignUp') }
    ]
  }
]
export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes

})
