import React from 'react';
import Image from 'next/image';
import Sidebartwo from '../components/secondpagesidebar';
import Footer from '../components/Footer';
import secondpagepic from '../../../public/images/secondpageImages/Frame (23).png'
const ProductList: React.FC = () => {
  return (
    <div>
    <div className="flex min-h-screen">
      <Sidebartwo/>
      <section className="text-gray-600 body-font flex-1 flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
            </div>
         </section>
         <div className='items-center '>
            <Image src={secondpagepic} alt='onepic'
        width={1092}  height={18013}
            />       
            </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductList;
    
