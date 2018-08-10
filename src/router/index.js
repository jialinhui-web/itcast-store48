import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
// import Users from '@/views/users/Users';

Vue.use(Router);

export default new Router({
  routes: [
    {name: 'Login', path: '/login', component: Login}
    // {name: 'Users', path: '/', component: Users}
  ]
});
