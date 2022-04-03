import Vue from 'vue'
import Router from 'vue-router'

import Interface from '@/components/Interface.vue'
import ImageAnimation from '@/components/ImageAnimation.vue'
import Media from '@/components/Media.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Interface',
      component: Interface
    }, {
      path: '/image',
      name: 'ImageAnimation',
      component: ImageAnimation
    }, {
      path: '/media',
      name: 'Media',
      component: Media
    }
  ]
})
