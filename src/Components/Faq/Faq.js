import React, { useState } from 'react';
import './Faq.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import img2 from '../../Assets/img2.png';

const Faq = () => {
    const [accordions, setAccordions] = useState([
        { id: 'input1', question: 'What is the data protection fee for?', answer: 'Answer 1' },
        { id: 'input2', question: 'Another FAQ question', answer: 'Answer 2' },
        { id: 'input3', question: 'Yet another FAQ question', answer: 'Answer 3' },
        { id: 'input4', question: 'One more FAQ question', answer: 'Answer 4' },
    ]);

    const toggleAccordion = (id) => {
        setAccordions((prevState) =>
            prevState.map((accordion) => ({
                ...accordion,
                isOpen: accordion.id === id ? !accordion.isOpen : false,
            }))
        );
    };

    return (
        <div className="ful">
            <div className="bg-white">
                <h3 className="heading_1">Frequently Asked Questions</h3>
                <div className="freq">
                    <div className="first1">
                        <img src={img2} alt="" className='imgage2' height='400px' width='400px' />
                    </div>
                    <div className="second1">
                        <form className="custom-form">
                            {accordions.map((accordion) => (
                                <div className={`accordion ${accordion.isOpen ? 'open' : ''}`} key={accordion.id}>
                                    <div className="accordion-header" onClick={() => toggleAccordion(accordion.id)}>
                                        <span>{accordion.question}</span>
                                        {accordion.isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                    </div>
                                    {accordion.isOpen && (
                                        <div className="accordion-content">{accordion.answer}</div>
                                    )}
                                </div>
                            ))}
                            <button className="btn" type="submit">
                           View More
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
