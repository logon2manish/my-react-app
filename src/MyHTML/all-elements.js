import React from "react";
import "./myStyle.css"
const myElements = () => {
    return(
            <div>
                <div className="form-container">
                <h1>Web Form</h1>
                <form id="webForm">
                    {/* First Name and Last Name */}
                    <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                    </div>
            
                    <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                    </div>
            
                    {/* Gender (Radio Buttons) */}
                    <div className="form-group">
                    <label>Gender:</label>
                    <label>
                        <input type="radio" name="gender" value="male" required /> Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" required /> Female
                    </label>
                    <label>
                        <input type="radio" name="gender" value="other" required /> Other
                    </label>
                    </div>
            
                    {/* Interests (Checkboxes) */}
                    <div className="form-group">
                    <label>Interests:</label>
                    <label>
                        <input type="checkbox" name="interests" value="sports" /> Sports
                    </label>
                    <label>
                        <input type="checkbox" name="interests" value="music" /> Music
                    </label>
                    <label>
                        <input type="checkbox" name="interests" value="reading" /> Reading
                    </label>
                    </div>
            
                    {/* Address */}
                    <div className="form-group">
                    <label htmlFor="addressLine1">Address Line 1:</label>
                    <input type="text" id="addressLine1" name="addressLine1" placeholder="Enter address line 1" required />
                    </div>
            
                    <div className="form-group">
                    <label htmlFor="addressLine2">Address Line 2:</label>
                    <input type="text" id="addressLine2" name="addressLine2" placeholder="Enter address line 2" />
                    </div>
            
                    {/* Dropdowns for City, State, Country */}
                    <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select id="city" name="city" required>
                        <option value="">Select your city</option>
                        <option value="newYork">New York</option>
                        <option value="losAngeles">Los Angeles</option>
                        <option value="chicago">Chicago</option>
                    </select>
                    </div>
            
                    <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <select id="state" name="state" required>
                        <option value="">Select your state</option>
                        <option value="ny">New York</option>
                        <option value="ca">California</option>
                        <option value="il">Illinois</option>
                    </select>
                    </div>
            
                    <div className="form-group">
                    <label htmlFor="country">Country:</label>
                    <select id="country" name="country" required>
                        <option value="">Select your country</option>
                        <option value="us">United States</option>
                        <option value="canada">Canada</option>
                        <option value="mexico">Mexico</option>
                    </select>
                    </div>
            
                    {/* Notes */}
                    <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <textarea id="notes" name="notes" rows="4" placeholder="Enter any additional notes"></textarea>
                    </div>
            
                    {/* Buttons */}
                    <div className="form-buttons">
                    <button type="reset" className="clear-btn">Clear</button>
                    <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        );
};
export default myElements;