import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

//layouts
import Header from './layouts/header/header.jsx'
import Footer from './layouts/footer/footer.jsx'
import Sidebar from './layouts/sidebar/sidebar.jsx';

//pages
import Home from './pages/home/home.jsx'
import Categories from './pages/categories/categories.jsx'
import Restaurants from './pages/restaurants/restaurants.jsx';
import RestaurantId from './pages/restaurantId/restaurantId.jsx';
import RegisterUser from './pages/register/registerUser.jsx';

import All from './pages/acount/pedidos/all.jsx';
import Billetera from './pages/acount/billetera/billetera.jsx';

import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import PrivateRoutes from './context/PrivateRoutes.jsx';

function App() {



  return (
    <AuthProvider> 

      <CartProvider>
        
        
   <div className='bg-bgPrimary  w-full h-full font-comic'>
      <Routes>
        <Route
          path="/"
          element={
            <div>
             <Header /> 
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="/categories"
          element={
            <div>
             <Header /> 
              <Categories />
              <Footer />
            </div>
          }
        />
        <Route
          path="/restaurants"
          element={
            <div>
             <Header /> 
              <Restaurants />
              <Footer />
            </div>
          }
        />


        <Route
          path="/restaurants/:id"
          element={
            <div>
             <Header /> 
              <RestaurantId />
              <Footer />
            </div>
          }
        />

        <Route
          path="/register&user"
          element={
            <div>
             <Header /> 
              <RegisterUser />
              <Footer />
            </div>
          }
        />

              <Route
                path="/count"
                element={
                    <PrivateRoutes >
                    <div className="page-with-sidebar flex">
                      <div className="content w-1/5 bg-textPrimary">
                        <Sidebar />
                      </div>
                      <div className="contentBody w-4/5">
                         <All />
                      </div>
                    </div>
                    </PrivateRoutes>
                }
              />

              <Route
                path="/count"
                element={
                    <PrivateRoutes >
                    <div className="page-with-sidebar flex">
                      <div className="content w-1/5 bg-textPrimary">
                        <Sidebar />
                      </div>
                      <div className="contentBody w-4/5">
                         <All />
                      </div>
                    </div>
                    </PrivateRoutes>
                }
              />

              <Route
                path="/billetera"
                element={
                    <PrivateRoutes >
                    <div className="page-with-sidebar flex">
                      <div className="content w-1/5 bg-textPrimary">
                        <Sidebar />
                      </div>
                      <div className="contentBody w-4/5">
                         <Billetera />
                      </div>
                    </div>
                    </PrivateRoutes>
                }
              />

        




        </Routes>
   </div>

      </CartProvider>
   </AuthProvider>
  );
}

export default App;
