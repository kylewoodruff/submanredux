import auth0 from 'auth0-js';

 class Auth {
   constructor(){
        this.auth0 = new auth0.WebAuth({
            domain: "sub-merge.auth0.com",


            clientID: process.env.REACT_APP_CLIENTID||"teNlTbyVB3lCq5OTWhmxEbkLJlLowDJN",
            redirectUri: "https://submanredux-stg.herokuapp.com/callback",           
             audience: "https://sub-merge.auth0.com/userinfo",

            responseType:"id_token",
            scope:"openid profile"
            });
            
            this.getProfile = this.getProfile.bind(this);
            this.handleAuthentication = this.handleAuthentication.bind(this);
            this.isAuthenticated = this.isAuthenticated.bind(this);
            this.signIn = this.signIn.bind(this);
            this.signOut = this.signOut.bind(this);
          }
        
          getProfile() {
            return this.profile;
          }
        
          getIdToken() {
            return this.idToken;
          }
        
          isAuthenticated() {
            return new Date().getTime() < this.expiresAt;
          }
        
          signIn() {
            this.auth0.authorize();
            console.log("This is your website" + process.env.REACT_APP_URL);

          }
        
          handleAuthentication() {
            return new Promise((resolve, reject) => {
              this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                  return reject(err);
                }
                this.setSession(authResult);
                resolve();
              });
            })
          }
          
          setSession(authResult) {
            this.idToken = authResult.idToken;
            this.profile = authResult.idTokenPayload;
            // set the time that the id token will expire at
            this.expiresAt = authResult.idTokenPayload.exp * 1000;
          }
        
          signOut() {
            this.auth0.logout({
              redirectUri: "https://submanredux-stg.herokuapp.com/callback",           
              clientID: "teNlTbyVB3lCq5OTWhmxEbkLJlLowDJN",
            });
          }
          
          silentAuth() {
            return new Promise((resolve, reject) => {
              this.auth0.checkSession({}, (err, authResult) => {
                if (err) return reject(err);
                this.setSession(authResult);
                resolve();
              });
            });
          }
        }



        const auth0Client = new Auth();
        
        export default auth0Client;
