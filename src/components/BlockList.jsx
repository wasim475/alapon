import React from 'react'
import fq1 from '../assets/FQPic/fq1.png'
import fq2 from '../assets/FQPic/fq2.png'
import fq3 from '../assets/FQPic/fq3.png'
import fq4 from '../assets/FQPic/fq4.png'
import Button from '@mui/material/Button';

const BlockList = () => {
  return (
    <>
        <div className='box'>
            <div className='Ftitle'>
                <h3>Block List</h3>
            </div>
            <div className='FList'>
                  <div className='GpImg'>
                      <img src={fq4}/>
                  </div>
                  <div className='details'>
                      <h4>Raghav</h4>
                      <p>Today, 8:56pm</p>
                  </div>
                  <div className='FButton'>
                      <Button size='small' variant='contained'>Unblock</Button>
                  </div>
              </div>
            <div className='FList'>
                  <div className='GpImg'>
                      <img src={fq3}/>
                  </div>
                  <div className='details'>
                      <h4>Swathi</h4>
                      <p>Today, 2:31pm</p>
                  </div>
                  <div className='FButton'>
                      <Button size='small' variant='contained'>Unblock</Button>
                  </div>
              </div>
            <div className='FList'>
                  <div className='GpImg'>
                      <img src={fq2}/>
                  </div>
                  <div className='details'>
                      <h4>Kiron</h4>
                      <p>Yesterday, 6:22pm</p>
                  </div>
                  <div className='FButton'>
                      <Button size='small' variant='contained'>Unblock</Button>
                  </div>
              </div>
            <div className='FList'>
                  <div className='GpImg'>
                      <img src={fq1}/>
                  </div>
                  <div className='details'>
                      <h4>Tejeshwini C</h4>
                      <p>Today, 12:22pm</p>
                  </div>
                  <div className='FButton'>
                      <Button size='small' variant='contained'>Unblock</Button>
                  </div>
              </div>
        </div>
    </>
  )
}

export default BlockList