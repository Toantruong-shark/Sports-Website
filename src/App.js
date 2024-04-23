import React from 'react';
import avt1 from './Images/avt1.avif';
import img1 from './Images/img1.avif';
import img2 from './Images/img2.avif';
import img3 from './Images/img3.avif';
import img4 from './Images/img4.avif';
import './App.css';
import SportsWear_Web from './Components/SportsWear_Web';



function App() {
  return (
    <div className="SW_Web">
      <SportsWear_Web
        image={img1}
        sale={avt1}
        discribe="Nike Air Max 270 React Cushioning Train"
        price="$149"
      >
      </SportsWear_Web>
      <SportsWear_Web
        image={img2}
        sale={avt1}
        discribe="Nike Air Max 270 React Cushioning Train"
        price="$149"
      >
      </SportsWear_Web>
      <SportsWear_Web
        image={img3}
        sale={avt1}
        discribe="Nike Air Max 270 React Cushioning Train"
        price="$149"
      >
      </SportsWear_Web>
      <SportsWear_Web
        image={img4}
        sale={avt1}
        discribe="Nike Air Max 270 React Cushioning Train"
        price="$149"
      >
      </SportsWear_Web>
    </div>
  );
}

export default App;