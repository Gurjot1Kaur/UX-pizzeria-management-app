
function Login({updateScreen}) {
    return (
      <>
        <label>Username</label>:<input/>
        <br/>
        <label>Password</label>:<input/>
        <div>
        <button onClick={() => {updateScreen(1)}}>Login</button>
        </div>

        <div>
           <h3> Forgot Password</h3>
           <label>Enter email</label>: <input/>
           <br/>
           <button>Submit</button>
        </div>
      </>
    );
  }
  
  export default Login;