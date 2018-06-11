global.perm = '';

class Auth{
  constructor(){
    this.state = {
      isLogin: '',
    };
  }
  // 用户登录函数
  login(user_name,user_pwd){
  return new Promise(function(resolve){
    fetch('http://www.empirecollege.net/Education/public/api/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "user": user_name,
        "password": user_pwd
      })
    }).then(response => response.json())
      .then((responseData) => {
        resolve(responseData);
        global.perm = true;
      }).catch((error) => {
        alert("Request failed")
    });
  })

  }
}
export default Auth;