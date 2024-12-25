import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServerSideData from '@/components/ServerSideData'

const page = () => {
  return (
    <div>
         <Header />
        <ServerSideData />
         <Footer />
    </div>
  )
}

export default page;