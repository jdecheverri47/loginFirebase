import { getAuth } from 'firebase/auth'
import db from '/composables/firebase.js'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth()

  // Check if the user is authenticated
  const user = auth.currentUser

  if (!user) {
    // If the user is not authenticated, redirect them to the login page
    return { path: '/login' }
  }
})