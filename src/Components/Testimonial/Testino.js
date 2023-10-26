import React from 'react';
import './Testino.css'
import test1 from '../../Assets/test1.png'
import test2 from '../../Assets/test2.png'
import test3 from '../../Assets/test3.png'
import test4 from '../../Assets/test4.png'


export function Structure({ name, destination, img }) {
    return (
        <div className='testimo'>
            <img
                src={img}
                alt=""
                height="200px"
                width="200px"
            />
            <p className='name'>{name}</p>
            <p className='destination'>{destination}</p>

        </div>
    )
}

const testData = [
    {
        img: test1,
        name: 'Promod sharma',
        destination: 'UI designer'
    },
    {
        img: test2,
        name: 'Promod sharma',
        destination: 'UI designer'
    },
    {
        img: test3,
        name: 'Promod sharma',
        destination: 'UI designer'
    },
    {
        img: test4,
        name: 'Promod sharma',
        destination: 'UI designer'
    },
]

function Testino() {
    return (
        <div className='t-main'>
            <div className='header'>
                <div className='hor-line'></div>
                <h2>Client Testimonial</h2>
                <div className='hor-line'></div>

            </div>
            <div className='test-flex'>
                {
                    testData.map((data, index) => (

                        <Structure
                            key={index}
                            img={data.img}
                            name={data.name}
                            destination={data.destination}
                        />

                    ))
                }
            </div>



        </div>
    )
}

export default Testino
