import React from 'react'
import ClientSideData from '@/components/ClientSideData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
         <Header />
       <ClientSideData />
         <Footer />
    </div>
  )
}

export default page;