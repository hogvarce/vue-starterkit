export default class Auth {
  logged = true;
  constructor() {
    console.log('authorization');
  }
  loggedIn = () => ( this.logged );
  logOut = () => this.logged = false;
}
