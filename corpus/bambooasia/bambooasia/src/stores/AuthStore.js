import { observable, action, computed } from 'mobx'
import Auth from '../utils/auth';
const auth = new Auth();
let authenticatedInterval = null;

class AuthStore {
  @observable authenticated = false;

  constructor(rootStore) {
    this.rootStore = rootStore;

    // todo: figure out better way than interval
    // there is some delay in checking authenticated from auth0
    if( typeof window !== 'undefined') {
      authenticatedInterval = setInterval(() => {
        this.authenticated = auth.isAuthenticated();
        if (this.authenticated) {
          clearInterval(authenticatedInterval)
        }
      }, 200)
    }
  }

  @computed get isAuthenticated() {
    return this.authenticated
  }

  @action
  login = () => {
    auth.login();
    this.authenticated = true;
  }

  @action
  logout = () => {
    auth.logout();
    this.authenticated = false;
  }
}

export default AuthStore;
