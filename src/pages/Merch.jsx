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

const Merch = () => {
    return (
        <div>
            <ParticleBackground />
            <GridContainer>
                <Card>
                    <h1>Merch</h1>
                    <h2>
                        <Link href="/">
                            <a>Back to home</a>
                        </Link>
                    </h2>
                </Card>
            </GridContainer>
        </div>
    )
}

export default Merch
