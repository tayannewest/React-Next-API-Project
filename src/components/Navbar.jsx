import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const Card = styled.div`
  width: 190px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;
  &::-webkit-scrollbar{
        display: none;
    };
`

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  z-index: 999;
  grid-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  &::-webkit-scrollbar{
        display: none;
    };

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }
`

const Navbar = () => {
    return (
        <GridContainer>
        <Card>
          <h1 className="title">
            {' '}
            <Link href="/About">
              <a>About</a>
            </Link>
          </h1>
          <h1 className="title">
            {' '}
            <Link href="/Developers">
              <a>Developers</a>
            </Link>
          </h1>
          <h1 className="title">
            {' '}
            <Link href="/Merch">
              <a>Merch</a>
            </Link>
          </h1>
          <h1 className="title">
            {' '}
            <Link href="/Contact">
              <a>Contact</a>
            </Link>
          </h1>
        </Card>
      </GridContainer>
    )
}

export default Navbar
