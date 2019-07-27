import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import API from './utils/Api';




class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();

    // await console.log(auth0Client.profile);
    // await console.log(auth0Client.getProfile());
    await API.saveUser({
        email: auth0Client.profile.email,
        firstName: auth0Client.profile.given_name,
        lastName: auth0Client.profile.family_name,
        name: auth0Client.profile.name,
        id: auth0Client.profile.sub,
        img_Avatar: auth0Client.profile.picturte,
      }).then(res => console.log(res))
        .catch(err => console.log(err))

    this.props.history.replace('/dashboard');
  }
  
  
  
  
  render() {
    return (
      <p>Loading profile...</p>

    )
  }
}

export default withRouter(Callback);