import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';

export const mycontext=createContext('');
const App = () => {
  const value=[
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://fr.shopping.rakuten.com/photo/1931622228_L.jpg"
                /*"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsVoCgFd0u4nU-5b9_f2BXkXY8QiH-eSAMvbdDfSOZ-VKy3eVyj2RtTAMqdDtWHUoxqg&usqp=CAU",
                "https://pbs.twimg.com/media/EUaKe6AUYAEeP5r.jpg:large",
                "https://fr.shopping.rakuten.com/photo/1931622228_L.jpg",
                "https://i0.wp.com/excelltronics.co.za/wp-content/uploads/2022/10/iphone-8-plus.jpg"*/
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
              "https://drop.ndtv.com/TECH/product_database/images/913201720152AM_635_iphone_x.jpeg?downsize=*:360"
             /*"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSkU2P3bMyMRUi7CThMVU4UbaJfZFqDUNKXaWKan2eRfvYISLw_vZcZcnukb2ioRCtv_o&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgW5XlQrYWjkxPmH7LfnFGezffjZ6wWvtJAiB1a-DwFCBq2iJd0ZxtCDMr_BmEAac44Y&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBY2Ek3pzLJxD1fuL-eQt-OMzSMvMiD4ja-0Gc2BcV-U4ZxBVlHsoWC6sG3K10TKdTvt4&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtexFzPImyelWUR6PgTyQT83fAvLuBS6lWMaF8TPBuKQ&s"*/
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrl5E4K666jipl34nqGDyIJJic8TT4EUwXR-hXwidCSAsosqbRqr4IIqjKM7qS48D1x2eAJ7o-YtoclJUanbAN8o3Z6IUssVgc3rpjj17u6NnLfE0wbRrf",
                /*"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrl5E4K666jipl34nqGDyIJJic8TT4EUwXR-hXwidCSAsosqbRqr4IIqjKM7qS48D1x2eAJ7o-YtoclJUanbAN8o3Z6IUssVgc3rpjj17u6NnLfE0wbRrf",
                "https://rukminim2.flixcart.com/image/750/900/k16qzrk0/mobile/9/y/y/samsung-galaxy-s9-plus-sm-g965fzkdins-original-imafkt2vjqz4hjha.jpeg?q=20&crop=false",
                "https://rukminim2.flixcart.com/image/750/900/k16qzrk0/mobile/9/y/y/samsung-galaxy-s9-plus-sm-g965fzkdins-original-imafkt2vjqz4hjha.jpeg?q=20&crop=false"*/
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk3-img-1920.jpg",
                /*"https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk6-img2-1920.jpg",
                "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk6-img3-1920.jpg",
                "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk6-img3-1920.jpg",
                "https://www.oppo.com/content/dam/oppo/product-asset-library/f19/f19-overview-v1/v1/assets/chunk7-img2-1920.jpg"*/
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30/P30_orange.png",
                /*"data:image/jpeg;base64,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",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqGz1r7i_tMAhpwduda5GmHgLmX0uYLcw0w&s"*/
            ]
        }
    ]
  const[data,setData]=useState(value);

  return (
    <div>
      {/*<h1>Context API</h1>
      <mycontext.Provider value={[contextValue,setContextValue]}>
        {/*//* Child Component */}
        {/*<CompA />
       
        <CompC />
      </mycontext.Provider>
      <mycontext.Provider value={{cv,setCv}}>
        <CompB />
      </mycontext.Provider>*/}
      <mycontext.Provider value={[data,setData]}>
        <Cart />
      </mycontext.Provider>
    </div>
  );
};

export default App;