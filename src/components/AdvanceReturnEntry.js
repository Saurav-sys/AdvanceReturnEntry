import React from 'react';
import '../styles/AdvanceReturnEntry.css';
const AdvanceReturnEntry = () => {
  return (
    <div className="container">
      <h3>Advance Return Entry</h3>
      <div className="main">
        <div className="header">
          <div className="hamburger-menu">
            <div className="dash"></div>
            <div className="dash"></div>
            <div className="dash"></div>
          </div>
          <input type="text" className="header-input" />
          <div className="icons">
            <i className="fa-solid fa-magnifying-glass icon"></i>
          </div>
        </div>
        <div className="first">
          <div className="field">
            <label htmlFor="" className="labelone">
              Advance no
            </label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="">Return no</label>
            <input type="text" />
          </div>
          <div className="field">
            <label htmlFor="" className="labelthree">
              Return date
            </label>
            <input type="date" />
          </div>
          <div className="field">
            <label htmlFor="">Consumer Name</label>
            <input type="text" />
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="excl">
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
          </div>
          <div className="field">
            <label htmlFor="">Salesman Code</label>
            <select></select>
          </div>
          <div className="field">
            <label htmlFor="" className="labeltwo">
              Manager
            </label>
            <select name="" id=""></select>
          </div>
          <div className="field">
            <label htmlFor="">Adv Amount</label>
            <input type="text" />
          </div>
        </div>
        <div className="second">
          <div className="one">
            <div className="check">
              <div className="checks">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="check-input"
                />
                <label htmlFor="">Cash</label>
              </div>
              <div className="checks">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="check-input"
                />
                <label htmlFor="">Cheque</label>
              </div>
              <div className="checks">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="check-input"
                />
                <label htmlFor="">RTGS</label>
              </div>
            </div>
            <div className="find">
              <div className="field-check">
                <label htmlFor="" className="cash">
                  Cash
                </label>
                <input type="text" />
              </div>
              <div className="field-check">
                <label htmlFor="">Cheque</label>
                <input type="text" />
              </div>
              <div className="field-check">
                <label htmlFor="" className="rtgs">
                  RTGS
                </label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="two">
            <div className="text-note">
              <label htmlFor="" className="label-field">
                Note
              </label>
              <div>
                <textarea rows="4" className="text-area-field"></textarea>
              </div>
            </div>
            <div className="note-field">
              <div className="field-check">
                <label htmlFor="">Advance Amount</label>
                <input type="text" />
              </div>
              <div className="field-check">
                <label htmlFor="" className="les">
                  Less Amount
                </label>
                <input type="text" />
              </div>
              <div className="field-check">
                <label htmlFor="" className="paid">
                  Paid Amount
                </label>
                <input type="text" />
              </div>
              <div className="field-check">
                <label htmlFor="" className="unpaid">
                  <strong>Unpaid Amount</strong>
                </label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceReturnEntry;
