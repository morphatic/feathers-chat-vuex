import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import authClient from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import feathersVuex from 'feathers-vuex'

// Setup the Feathers client
const host = 'http://localhost:3030'
const socket = io(host, { transports: ['websocket'] })
const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(authClient({ storage: window.localStorage }))

export default feathersClient

// Setup feathers-vuex
const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex
} = feathersVuex(feathersClient, {
  serverAlias: 'api', // or whatever that makes sense for your project
  idField: '_id' // `id` and `_id` are both supported, so this is only necessary if you're using something else.
})

export {
  makeAuthPlugin,
  makeServicePlugin,
  BaseModel,
  models,
  clients,
  FeathersVuex
}
