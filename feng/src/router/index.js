import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import shopping from '@/components/shopping'
import coupon from '@/components/coupon'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: '/login',
      component: login
		},
		{
			path:'/register',
			component:register
		},
		{
			path:'/shopping',
			component:shopping
		},
		{
			path:'/coupon',
			component:coupon
		}
  ]
})
