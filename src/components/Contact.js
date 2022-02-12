import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-details">
            <ul>
              <li>
                <h5>
                <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
                </h5>
              </li>
              <li>
                <h5 style={{marginLeft: "2px"}}>
                  <a target="_blank" 
                  href="https://github.com/KumarGudipalli">
                <img src="https://img.icons8.com/small/48/ffffff/github.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank" 
                  href="https://www.linkedin.com/in/kumar-gudipalli-a37672176/">
                <img src="https://img.icons8.com/ios-glyphs/48/4a90e2/linkedin.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank"
                   href="">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/48/4a90e2/external-gps-map-and-location-justicon-flat-justicon.png"/>
                </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:Kumargudipalli97@gamil.com"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
