'use client';

import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Head from 'next/head';
import Portfolio from './components/Portfolio';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

let scrollPos = 0;

const handleAnchorScroll = (target: string) => {
  const element = document.querySelector(`#${target}`);
  element?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
};

const Index: React.FC = () => {
  const [showNav, setShowNav] = useState(true);

  const checkScrollPosition = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = scrollPos > currentScrollPos;

    setShowNav(visible);
    scrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.onscroll = checkScrollPosition;
    console.log('[Hysteresis] - Started logging');
  }, []);

  return (
    <>
      <Head>
        <title>Victor Hall</title>
      </Head>
      {/* <NavBar hidden={!showNav} handleScroll={handleAnchorScroll} /> */}
      <div>
        {/* <Fade delay={200} triggerOnce={false}> */}
        <div
          id="funnel"
          className="funnel"
          style={{
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ margin: '0 auto' }}>Hey, I'm Victor 👨‍💻</h1>
          <h2 style={{ margin: '8rem auto' }}>
            I'm a fullstack web developer and React enthusiast.
          </h2>
          <div
            style={{
              display: 'flex',
              marginTop: '10rem',
              justifyContent: 'center',
            }}
          >
            <div className="up" onClick={() => handleAnchorScroll('portfolio')}>
              Projects
            </div>
          </div>
        </div>
        {/* </Fade> */}
        {/* <Portfolio /> */}
      </div>
      <Footer />
    </>
  );
};

export default Index;
