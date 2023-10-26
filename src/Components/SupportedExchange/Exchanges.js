import React from 'react'
import './Exchanges.css'
import img1 from '../../Assets/imgx1.png'
import img2 from '../../Assets/imgx2.png'
import img3 from '../../Assets/imgx3.png'
import img4 from '../../Assets/imgx4.png'
import img5 from '../../Assets/imgx5.png'

function Exchanges() {


    const imgData = [
        img1, img2, img3, img4, img5
    ]

    return (
        <div className='x-main'>
            <div className='header'>

                <h2 className='heading'>Supported Exchanges</h2>
                <p>we integrate with 5 of the most popular exchanges including</p>

                <div className='img-div'>
                    {
                        imgData.map((data, index)=>(

                            <img src={data} alt="" key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Exchanges
