
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }, {
    path: '/user',
    redirect: '/user/login',
    name: 'User',
    component: () => import('pages/Login'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/Login/Login.vue')
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('pages/Login/Signup.vue')
      },
      {
        path: 'forget',
        name: 'Forget',
        component: () => import('pages/Login/Forget.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
