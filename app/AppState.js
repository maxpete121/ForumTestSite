import { Post } from './models/Post.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

/**@type {Post[]} */
  Posts = []
/**@type {Comment[]} */
  Comments = []

  activePost = null

/**@type {Comment[]} */
  activeComments = []
}

export const AppState = createObservableProxy(new ObservableAppState())