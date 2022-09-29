import React from 'react'

export default function Carousel (){
  return (
    <div>
    <div
      style={{ maxHeight: '400px' }}
      id='carouselExampleIndicators'
      className='carousel slide overflow-hidden'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://motorolaph.vtexassets.com/assets/vtex.file-manager-graphql/images/b225419d-51cc-461e-bb0a-007e7fd87c51___ea751eca19b67e0df02b8b4c2cb6de5d.jpg'
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://www.grameenkart.com/admin/uploads/category_images/425188621_apple-sale-banner-2018.jpg'
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://enclavegeek.com/wp-content/uploads/2017/04/S8_banner_2100x750.jpg'
            className='d-block w-100'
            style={{ maxHeight: '400px' }}
            alt='...'
          />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'></span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'></span>
      </a>

    </div>
    <script src ="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
        $("#carouselExampleIndicators").carousel();
    </script>
      {/* <script src = "js/jquery-2.2.3.min.js"></script>
      <script src="js/bootstrap.js"></script> */}
    </div>
  )
}





// import React from "react";
// import { Link } from "react-router-dom";



// export default function Carousel() {

//   return (

// /* <div id="carousel" classNameName="carousel slide" data-bs-ride="carousel">
//   <div classNameName="carousel-inner">
//     <div classNameName="carousel-item active">
//       <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/145/180/themes/material/1-slide-1656983228906-1907994383-a65c8e65cf3c79571e7499a9084f9a671656983232-1024-1024.webp?1023806830" classNameName="d-block w-100" alt="banner1"/>
//     </div>
//     <div classNameName="carousel-item">
//       <img src="https://xiaomiperu.com/media/wysiwyg/celulares_xiaomi_serie_redmi.jpg" classNameName="d-block w-100" alt="banner2"/>
//     </div>
//     <div cclassNameName="carousel-item">
//       <img src="https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg?imwidth=1366" classNameName="d-block w-100" alt="banner3"/>
//     </div>
//   </div>
// </div> */



// //     <div id="carouselExample" className="carousel slide" data-ride="carousel">
// //   <div className="carousel-inner">
// //     <div className="carousel-item active">
// //       <img src="https://d2r9epyceweg5n.cloudfront.net/stores/001/145/180/themes/material/1-slide-1656983228906-1907994383-a65c8e65cf3c79571e7499a9084f9a671656983232-1024-1024.webp?1023806830" className="d-block w-100" alt="img not found"/>
// //     </div>
// //     <div className="carousel-item">
// //       <img src="https://xiaomiperu.com/media/wysiwyg/celulares_xiaomi_serie_redmi.jpg" className="d-block w-100" alt="img not found"/>
// //     </div>
// //     <div className="carousel-item">
// //       <img src="https://images.samsung.com/is/image/samsung/assets/ar/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg?imwidth=1366" className="d-block w-100" alt="..."/>
// //     </div>
// //   </div>
// //   <a href="#carouselExample" className="carousel-control-prev" role="button" data-slide="prev">
// //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //     <span className="visually-hidden">Previous</span>
// //   </a>
// //   <a href="#carouselExample" className="carousel-control-next" role="button" data-slide="next">
// //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //     <span className="visually-hidden">Next</span>
// //   </a>
// // </div>
// // )
// // }
