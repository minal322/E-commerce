import React from 'react'
import product from '../sanityecommerce/schemas/product';
import {Product , FooterBanner, HeroBanner} from '../components';
import {client } from '../lib/client';
import banner from '../sanityecommerce/schemas/banner';

const Home = ({products, bannerData}) => {
  return (
    <>
        <HeroBanner  heroBanner = {bannerData.length && bannerData[0]} />
           
        <div className='products-heading'>
          <h2> Best Selling Products</h2>
          <p>Speakers Of Many Variations</p>
        </div>
        
        <div className='products-container'>
         {products?.map((product) => <Product key={product._id} product={product} />)} 
        </div>

        <FooterBanner  footerBanner = {bannerData && bannerData[0]} />
    </>

  )
}

export default Home;

//to fetch data for server side rendering use getServerSideProps

export const getServerSideProps = async () =>{
  const query ='*[_type == "product"]'; //select * all products from sanity
  const products = await client.fetch(query); 

  const bannerQuery ='*[_type == "banner"]'; //select * all products from sanity
  const bannerData = await client.fetch(bannerQuery);
  
  return {
    props :{ products,bannerData }
  }

}
