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
  width: 30vw;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  border-style: outset;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  z-index: 999;

  h1 {
    text-align: left;
  }
`

const GridContainer = styled.div`
  display: grid;
  // width: 100fr;
  z-index: 999;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
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
            <h1>Meet the devs yeah</h1>
          </Blurb>
          <Info>
            <h1>Nate</h1>
            <p>Here goes a little personal info before the contact info</p>
            <ul>
              <li>Portfolio</li>
              <li>GitHub</li>
              <li>Email</li>
            </ul>
          </Info>
          <Info>
            <h1>Jeremy</h1>
            <p>Here goes a little personal info before the contact info</p>
              <li>Portfolio</li>
              <li>GitHub</li>
              <li>Email</li>
          </Info>
          <Info>
            <h1>Tay</h1> 
            <p>Here goes a little personal info before the contact info</p>
              <li>Portfolio</li>
              <li>GitHub</li>
              <li>Email</li>
          </Info>
        </GridContainer>
      </div>
    )
}

export default Contact
