import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
    domain: "sub-merge.auth0.com",
    clientID:"teNlTbyVB3lCq5OTWhmxEbkLJlLowDJN",
    redirectUri:"http://localhost:3000/dashboard",
    audience: "http://sub-merge.auth0.com/userinfo",
    responseType:"token_id_token",
    scope:"openid"
    });

    constructor(){
        this.login = this.login.bind(this);
    }
    login() {
        this.auth0.authorize();

    }
}