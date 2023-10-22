import React from 'react'
import Arrow from '../../assets/Arrow'
import './menuBar.css'

function menuBar() {
  return (
    
        <div className='bannerChildDiv'>
          <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House & Apartments</span>
          </div>
        </div>
        </div>
    
  )
}

export default menuBar
