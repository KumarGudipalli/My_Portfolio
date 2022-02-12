import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Kumar Gudipalli</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Web Developer</li>
              <li>Programmer</li>
            </ul>
            <div className="action">
              <Button
                link="https://drive.google.com/file/d/1Jc0u0Hx0Zpe-Rtb0k26cXjt3dyPN0hC7/view?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
