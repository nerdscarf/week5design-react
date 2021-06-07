import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">


        <div className="left">
          <h1>Learn to code by watching others</h1>
          <h4>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</h4>
        </div>

        <div className="right">
          <div class="top-banner"><span>Try it free for 7 days </span>then $20/mo. there after</div>

          <form>
            <fieldset>
                <label>
                  <input type="text" name="fname" value="Jonathan" /><br />
                  <input type="text" name="lname" value="Last Name" /><br />
                  <input type="text" name="email" value="Email Address"/><br />
                  <input type="text" name="password" value="Password"/><br />
                  <input type="submit" value="Claim your free trial" />
            <p>By clicking the button you are agree to our <span>Terms and Services</span></p>
                </label>
            </fieldset>
          </form>


        </div>


      









      </div>
    </div>
  );
}

export default App;
