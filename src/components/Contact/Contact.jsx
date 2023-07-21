import React from 'react';
import './Contact.css';
import {MdCall, MdChatBubble} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className='c-wrapper' id="ContactUs">
        <div className='paddings innerWidth flexCenter c-container'>

            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy To Contact Us</span>
                <span className='secondaryText'>We are always ready to help by providing the best services for you. We believe a good place to live can make life better</span>

                <div className='flexColStart contactModes'>
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>091 123 456 789</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>Call Now</div>
                        </div>

                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>091 123 456 789</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>Chat Now</div>
                        </div>
                    </div>

                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>091 123 456 789</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>Video Call Now</div>
                        </div>

                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>091 123 456 789</span>
                                </div>
                            </div>

                            <div className='flexCenter button'>Message Now</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='c-right'>
                <div className='img-container'>
                    <img src="./contact.jpg" alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact