import React, {Fragment} from 'react';

export default class Login extends React.Component {

  handleSubmit(event) {
    event.preventDefault()
    
    let autenticated = true;

    const {username, userlastname,
      email, acept} = event.target.elements
    
    if (!/[a-zA-Z\s]+/ig.test(username.value.trim())) {
      username.focus();
      autenticated = false;
    }
    if (!/[a-zA-Z\s]+/ig.test(userlastname.value.trim())) {
      userlastname.focus();
      autenticated = false;
    }
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ig.test(email.value.trim())) {
      email.focus();
      autenticated = false;
    }
    if (!acept.checked) {
      acept.focus();
      autenticated = false;
    }

    if (autenticated){
      this.props.onAutenticated(username.value.trim());
    }

  }

  render() {
    return (
      <Fragment>
      <h1 className="login-title">Registro ;)</h1>
      <form onSubmit={(event) => this.handleSubmit(event)} className="login-container">
        <div>
          <label htmlFor="username">Nombres: </label>
          <input id="username" required/>
        </div>
        <div>
          <label htmlFor="userlastname">Apellidos: </label>
          <input id="userlastname" required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" required/>
        </div>
        <div>
          <label htmlFor="age">Edad:</label>
          <select id="age">
            <option value="+18">+18 años</option>
            <option value="-18">-18 años</option>
          </select>
        </div>
        <div>
          <label htmlFor="acept">Aceptas los terminos:</label>
          <input
            id="acept"
            name="acept"
            type="checkbox"
          />
        </div>
        <input id="submit" type="submit" value="Login" />
      </form>
      </Fragment>
    );
  }  
}