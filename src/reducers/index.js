import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweest'

export default combineReducers({
  authedUser,
  users,
  tweets
})