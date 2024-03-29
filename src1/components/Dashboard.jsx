import React ,{useEffect}from 'react'
import styled from 'styled-components';
import Analytics from './Analytics';
import Earnings from './Earnings';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Profile from './Profile';
import Transfers from './Transfers';
import scrollreveal from "scrollreveal";

export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return <Section>
  <Navbar />
  <div className="grid">
    
    <div className="row__two">
      <Earnings />
      <Transfers />
      <Profile />
    </div>
    <div className="row__one">
      <Analytics />
      <FAQ />
    </div>
  </div>
</Section>
}
const Section=styled.section`
margin-left: 18vw;

padding: 2rem;
height: 100%;
.grid {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin-top: 2rem;
  .row__one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;
  }
  .row__two {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 50%;
  }
}
@media screen and (min-width: 980px) and (max-width: 1980px) {
  margin-left: 0;
  display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  .grid {
    .row__one,
    .row__two {
      grid-template-columns: 1fr;
    }
  }
}
`;