
import Cookies from 'js-cookie'
class AuthService {
 
  logout() {
    Cookies.remove('login')
    window.location.href = "/";
  }

  checkUser(){
    if (Cookies.get('access_token')) {
     return true;
    }
    return false;
  }

 getUser = () => {
    let user = null;
    if(Cookies.get('login')){
      user = JSON.parse(Cookies.get('access_token'))
      return user;
    }
    return user;
  };

}

export default new AuthService();
