import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Chatbot from './Components/chatbot';
import LanguageSelector from './Components/LanguageSelector';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <LanguageSelector />
      <Chatbot />
    </>
  );
};

export default MainLayout;