import Page from './page'
import Project from './project'
import User from './user'
import Search from './search'
import Charge from './charge'
import { client } from '../utils/index'

const apiFactory = {
  ...Charge,
  ...Page,
  ...Project,
  ...User,
  ...Search
}

export default (requestName, params = {}, data = {}) => client({
  url: apiFactory[requestName].url,
  method: apiFactory[requestName].type,
  params: params
})
