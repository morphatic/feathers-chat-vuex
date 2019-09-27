// Bring in the imports from the feathers-client.js file.
import feathersClient, { makeServicePlugin, BaseModel } from '@/feathers-client'

// Extend the base class
class Messages extends BaseModel {
  constructor(data, options) {
    super(data, options)
  }
  static modelName = 'Messages'
  static instanceDefaults() {
    return {
      createdAt: '',
      text: '',
      userId: ''
    }
  }
}
const servicePath = 'messages'
const servicePlugin = makeServicePlugin({
  Model: Messages,
  service: feathersClient.service(servicePath),
  servicePath
})

// Optionally add service-level hooks, here:
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
