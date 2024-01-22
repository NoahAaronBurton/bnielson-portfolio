import Section from './components/Section'
import Music from './components/Music'
import Card from './components/Card'

import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import jazz from './assets/jazz.png'

import './App.css'
import { useState } from 'react';

const AboutMe = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <p className='break-normal'>I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills. I am a commercial audio specialist with over 10 years of experience in the field. I have worked with many different clients and have a wide range of skills.</p>
      </div>
      <div className='flex flex-row'>
        {/* <img className='h-48 w-48' src={profilePic} alt="" /> */}
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2 mb-4 justify-between'>
          <p className='mr-6'>While JavaScript is never required for Netlify Forms, you can use JavaScript to submit forms with AJAX/XHR if you’d like. That makes Netlify Forms a great companion to sites powered by Vue, React, or other modern frameworks.</p>
          <div className='flex flex-row w-auto justify-items-end mt-4 md:mt-0' >
            <a href=""><FaInstagram className='mr-1' size={'32'}/></a>
            <a href=""><FaXTwitter className='mr-1' size={'32'} /></a>
            <a href=""><FaLinkedinIn className='mr-1' size={'32'} /></a>
          </div>
        </div>
          <div className='w-full md:w-1/2'>
            <form name="contact" method="post" className="w-full max-w-lg mx-auto">
            <input type="hidden" name="form-name" value="contact" />
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
      </div>
  )
}

const Header = () => {
  return (
    <div className='container w-full mb-10'>
      <div className='w-auto'>
        <h1 className='text-6xl text-nowrap font-bold'>Brendon Nielson</h1>
        <h2 className='text-4xl text-nowrap'>Commercial Audio Specialist</h2>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='flex flex-col'>
        <Card title='Title' description='Description' image={jazz} />
        <Card title='Title' description='Description' image={jazz} />
      </div>
  )
}

const Services = () => {
  return (
    <div className='flex flex-col'>

      <Card title='Title' description='Description' image={jazz} />
      <Card title='Title' description='Description' image={jazz} />
    </div>
      
  )
}


const sections = [
  {
    title: 'About Me',
    component: <AboutMe />
  },
  {
    title: 'Music',
    component: <Music />
  },
  {
    title: 'Services',
    component: <Services />
  },
  {
    title: 'Projects',
    component: <Projects />
  },
  {
    title: 'Contact',
    component: <Contact />
  }
]
function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  // 1.  For each section in the sections array, create a menu item. When a menu item is clicked, it should update activeSection to its corresponding section id



  return (
    <div className='flex flex-col min-h-screen flex-wrap pt-5 w-full lg:px-[150px] lg:py-[50px] '>
      <Header />
    {/* 2.  Render the menu items here */}
      <div className='flex flex-row flex-wrap justify-between'>
        <div className='flex flex-col w-full lg:w-1/4'>
          
        </div>
        <div className='flex flex-col w-full lg:w-3/4'>
          {/* 3.  Render the active section here */}

        </div>
      </div>
    
    </div>
  )
}

export default App