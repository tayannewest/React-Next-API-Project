import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import ParticleBackground from '../ParticleBackground';

const Card = styled.div`
  width: 190px;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;

  h1, h2 {
    text-align: center;
  }
`

const Blurb = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  border-style: outset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto;
  z-index: 999;
  h1 {
    text-align: center;
  }
`

const Info = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border-style: outset;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin: auto;
  z-index: 999;

  h1 {
    text-align: left;
  }

  a:hover {
    color: pink;
  }
`

const GridContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  &::-webkit-scrollbar{
        display: none;
    };
`

const Contact = () => {
    return (
        <div>
        <ParticleBackground />
        <GridContainer>
          <Card>
            <h1>Contact</h1>
            <h2>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h2>
          </Card>
          <h1>Hello</h1>
          <Blurb>
            <h1>come on jesus</h1>
          </Blurb>
          <Info>
            <h1>Nate</h1>
            <p>Here goes a little personal info before the contact info</p>
            <li><a href="https://coffeegremlin.com/" target="_blank" rel="noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/coffeegremlin" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/nathanmausert/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li>Email</li> 
              {/* natemausert@gmail.com */}
          </Info>
          <Info>
            <h1>Jeremy</h1>
            <p>Here goes a little personal info before the contact info</p>
            <li><a href="https://www.darkmeowproductions.com/" target="_blank" rel="noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/Darkskittlz" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jeremydev/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li>Email</li>
              {/* Darkskiiittles@gmail.com */}
          </Info>
          <Info>
            <h1>Tay</h1> 
            <p>Here goes a little personal info before the contact info</p>
              <li><a href="https://taywest.dev/" target="_blank" rel="noreferrer">Portfolio</a></li>
              <li><a href="https://github.com/tayannewest" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/tayannewest/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li>Email</li>
          </Info>
        </GridContainer>
      </div>
    )
}

export default Contact
