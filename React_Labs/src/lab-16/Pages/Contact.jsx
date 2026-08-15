import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
    <br/>
      <div class="form">
        <center>
        <form>
            <center>
                <h1>● Contact us ●</h1>
            </center>
            <label for="fn">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="fn"
              required
            /><br/><br/>
            <label for="ln">Last Name</label>
            <input type="text" placeholder="Enter last Name" id="ln" required /><br/><br/>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email ID"
              id="email"
              pattern="[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,27}"
              required
            /><br/><br/>
            <label for="gender">Gender</label>
            <input type="radio" name="gender" id="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label for="female">Female</label><br/><br/>
            <label for="mn">Mobile No.</label>
            <input
              type="tel"
              placeholder="Enter mobile no."
              id="mn"
              minlength="10"
              maxlength="10"
              required
            /><br/><br/>
            <label for="age">Age</label>
            <input type="number" id="age" min="18" max="80" required /><br/><br/>
            State
            <select>
              <option>Select State</option>
              <option>Jammu & Kashmir</option>
              <option>Ladakh</option>
              <option>Panjab</option>
              <option>Haryana</option>
              <option>Rajasthan</option>
              <option>Gujarat</option>
              <option>Madhya Pradhesh</option>
              <option>Maharastra</option>
              <option>Goa</option>
              <option>Karnataka</option>
              <option>Keral</option>
              <option>Tamil Nadu</option>
              <option>Andra Pardesh</option>
              <option>Telangana</option>
              <option>Chhattisgarh</option>
              <option>Orissa</option>
              <option>Jharkhand</option>
              <option>West Bengal</option>
              <option>Tripura</option>
              <option>Mizoram</option>
              <option>Manipur</option>
              <option>Nagaland</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Meghalaya</option>
              <option>Sikkim</option>
              <option>Bihar</option>
              <option>Uttar Pradesh</option>
              <option>Delhi</option>
              <option>Uttarakhand</option>
              <option>Himachal Pradesh</option>
            </select><br/><br/>
            <label for="rm">Remark</label>
            <textarea
              placeholder="Enter Your Remark"
              rows="5"
              cols="35"
            ></textarea><br/><br/>
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
        <br />
        <br />
        </center>
      </div>
      <br/>
    </>
  );
}

export default Contact;
