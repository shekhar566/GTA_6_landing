import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>

      <FirstVideo/>
      <Jason/>
      <SecondVideo/>
      <Lucia/>
      <PostCard/>
    </main>
  )
}

export default App