import React from 'react'
import '../styling/footer.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className='centerStyling'>
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className="list-unstyled">
              <li>555-555-5555</li>
              <li>One Bernard Baruch Way</li>
              <li>(55 Lexington Avenue at 24th Street)</li>
              <li>New York, NY 10010</li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Team</h4>
            <ui className="list-unstyled">
              <li>Iris: Business Analyst</li>
              <li>Joseph: Technical Architect</li>
              <li>Sidra: Front-End Developer</li>
              <li>Zeqing: Back-End Developer</li>
              <li>Eugene: ?</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Group 3</h4>
            <ui className="list-unstyled">
              <li>CIS 5800</li>
              <li>Professor</li>
              <li>J. Byun</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}
            <br/>All rights reserved | Terms Of Service | Privacy
            <br/>Documentation
            <br/><a href="https://sites.google.com/view/cis5800team3/about-us" onclick="location.href=this.href+'?xyz='+val;return false;"
            style={{color: 'white' }}>SharedShelf</a>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
