import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FriendResearch from '../views/FriendResearch'
import TeamResearch from '../views/TeamResearch'
import RoomResearch from '../views/RoomResearch'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  { 
    path: '/research/friend',
    component: FriendResearch 
  },
  { 
    path: '/research/team',
    component: TeamResearch 
  },
  { 
    path: '/research/room',
    component: RoomResearch 
  },
  { 
    path: '/login',
    component: Login 
  },
  { 
    path: '/register',
    component: Register 
  },
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})