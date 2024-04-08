import React from 'react'
import Navbar from './Navbar'

const CompanyInfo = () => {
    return (
        <div className='company-info-container'>
            <Navbar />
            <div className='company-info-content'>
                <h2 className='company-info-title'>Company Info</h2>
                <div className='company-info-details'>
                    <p><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
                    <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
                    <p><strong>Phone:</strong> XXXXXXXXX09</p>
                    <p><strong>Email:</strong> XXXXXX@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyInfo