import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FriendResearch from '../views/FriendResearch'
import TeamResearch from '../views/TeamResearch'
import RoomResearch from '../views/RoomResearch'
import Login from '../views/Login'
import Register from '../views/Register'
import Mypage from '../views/Mypage'
import CreateRoom from '../views/CreateRoom'
import CreatePrivacyRoom from '../views/CreatePrivacyRoom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mypage',
    component: Mypage
  },
  { 
    path: '/login',
    component: Login 
  },
  { 
    path: '/register',
    component: Register 
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
    path: '/create/room',
    component: CreateRoom 
  },
  { 
    path: '/create/room/privacy',
    component: CreatePrivacyRoom
  },
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})