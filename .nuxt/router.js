import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0fc50f53 = () => import('../pages/Upcoming.vue' /* webpackChunkName: "pages/Upcoming" */).then(m => m.default || m)
const _d890df60 = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _ea25fb34 = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _03a73f6b = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _5f6c1054 = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _876030d8 = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _3332bd4b = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/Upcoming",
			component: _0fc50f53,
			name: "Upcoming"
		},
		{
			path: "/Sponsors",
			component: _d890df60,
			name: "Sponsors"
		},
		{
			path: "/About",
			component: _ea25fb34,
			name: "About"
		},
		{
			path: "/Gallery",
			component: _03a73f6b,
			name: "Gallery"
		},
		{
			path: "/Library",
			component: _5f6c1054,
			name: "Library"
		},
		{
			path: "/Team",
			component: _876030d8,
			name: "Team"
		},
		{
			path: "/",
			component: _3332bd4b,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
