import './register.css';

function Register() {
  return (
    <div className="registerPage">
      <h1>Register</h1>
      <form action="" className="formRegister">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;