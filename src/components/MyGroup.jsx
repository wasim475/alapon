import React from 'react'
import fq1 from '../assets/FQPic/fq1.png'
import fq2 from '../assets/FQPic/fq2.png'
import fq3 from '../assets/FQPic/fq3.png'
import fq4 from '../assets/FQPic/fq4.png'

const MyGroup = () => {
  return (
    <>
        <div className='box'>
        <div className='Ftitle'>
                <h3>My Groups</h3>
            </div>
            <div className='FList'>
                <div className='GpImg'>
                    <img src={fq1}/>
                </div>
                <div className='details'>
                    <h4>Tejeshwini C</h4>
                    <p>I miss him badly.</p>
                </div>
                <div className='FButton'>
               time
                </div>
            </div>
            <div className='FList'>
                <div className='GpImg'>
                    <img src={fq3}/>
                </div>
                <div className='details'>
                    <h4>Swathi</h4>
                    <p>Feeling sad.</p>
                </div>
                <div className='FButton'>
               time
                </div>
            </div>
            <div className='FList'>
                <div className='GpImg'>
                    <img src={fq2}/>
                </div>
                <div className='details'>
                    <h4>Kiron</h4>
                    <p>Great.</p>
                </div>
                <div className='FButton'>
               time
                </div>
            </div>
            <div className='FList'>
                <div className='GpImg'>
                    <img src={fq4}/>
                </div>
                <div className='details'>
                    <h4>Ragab</h4>
                    <p>Part time singer.</p>
                </div>
                <div className='FButton'>
               time
                </div>
            </div>
            <div className='FList'>
                <div className='GpImg'>
                    <img src={fq1}/>
                </div>
                <div className='details'>
                    <h4>Tejeshwini C</h4>
                    <p>I miss him badly.</p>
                </div>
                <div className='FButton'>
               time
                </div>
            </div>
        </div>
    </>
  )
}

export default MyGroup