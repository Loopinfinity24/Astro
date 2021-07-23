import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';


import ico1 from '../images/horo/ico1.png'
import ico2 from '../images/horo/ico2.png'
import ico3 from '../images/horo/ico3.png'
import ico4 from '../images/horo/ico4.png'
import ico5 from '../images/horo/ico5.png'
import ico6 from '../images/horo/ico6.png'
import ico7 from '../images/horo/ico7.png'
import ico8 from '../images/horo/ico8.png'
import ico9 from '../images/horo/ico9.png'
import ico10 from '../images/horo/ico10.png'
import ico11 from '../images/horo/ico11.png'
import ico12 from '../images/horo/ico12.png'

const Gemini = () => {
    return (
        <div className="AriesWrapper">
            <Navbar />
            <div className="header">
                <Breadcrumb className="bread">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Gemini</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="Aries">
                <div className="AriesLeft">
                    <Button variant="primary" className="btn">Daily</Button>{' '}
                    <Button variant="success" className="btn">Weekly</Button>{' '}
                    <Button variant="dark" className="btn">Monthly</Button>{' '}
                    <Button variant="danger" className="btn">Yearly</Button>
                    <div className="AriesHead">
                        <h1 className="AriesHeading">About Sunsign</h1>
                        <div className="AriesDesc">
                            <h4 className="head">Gemini ( 21 May – 21 June )</h4>
                            <p className="AriesPara">Gemini is a sign symbolized by the twins. Naturally, Gemini shows duality in their characteristics. Gemini is characterized by the prominent inconstancy. People of this sign always look situation from the dual perspective. This characteristic often leaves them confused about their feelings.Geminis are adjustable and versatile. They can easily adapt to any changing situation. They are versatile, as they enjoy wide range of subjects. They are enthusiastic and full of life. Geminis always crave for beautiful and creative things. Geminis born are excellent in their communication skill. They are soft-spoken. They can easily sell anything. They are intellectual and always interested in learning numerous subjects. They are curious, talkative, versatile and energetic.Geminis are prominent air sign. Motto of Gemini life is “Rolling stone gathers no moss”. People born under Geminis are quick decision maker. They are often polyglots, means speaking several languages.</p>
                            <p className="AriesPara">In the love life, Geminis are often flirtatious. Their intelligence and speaking abilities make them able to find new friends and admirer. Because of the little flirtatious nature Gemini love side goes in a roller coaster side. To know about your partner Ask us Geminis love to talk and intelligence is the most important characteristics which make them special and attractive. They can get into relations without being serious. They love to live on the edge. Gemini women are intelligent and feminine. On their professional front they are great orators. They love to gossip and dig up things. They can become successful public speakers, orators, writers, novelists, and successful Journalist. Some of the negative traits of Geminis are superficial, spontaneous, agitated and deceitful. Gemini suffers from nervous problems and blood related problems. Mercury is the ruling planet of Geminis. The favorable months of this sun sign are January, March, April, June, August and November. Gemini’s are full of energy, but they have a tendency to bite off more than they can chew. This makes them anxious and erratic.</p>
                        </div>
                    </div>
                </div>
                <div className="AriesRight">
                    <div className="RightDiv">
                        <a href="/Aries"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico1} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%', marginTop: '10px' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '30px' }}>Aries (Mar 21 - Apr 19)</p>
                        </div></a>
                        <hr />
                        <a href="/Taurus"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico2} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Taurus (Apr 20 - May 20)</p>
                        </div></a>
                        <hr />
                        <a href="/Gemini"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico3} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Gemini (May 21 - Jun 20)</p>
                        </div></a>
                        <hr />
                        <a href="/Cancer"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico4} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Cancer (Jun 21 - Jul 22)</p>
                        </div></a>
                        <hr />
                        <a href="/Leo"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico5} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Leo (Jul 23 - Aug 22)</p>
                        </div></a>
                        <hr />
                        <a href="/Virgo"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico6} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Virgo (Aug 23 - Sep 22)</p>
                        </div></a>
                        <hr />
                        <a href="/Libra"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico7} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Libra (Sep 23 - Oct 22)</p>
                        </div></a>
                        <hr />
                        <a href="/Scorpio"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico8} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Scorpio (Oct 23 - Nov 21)</p>
                        </div></a>
                        <hr />
                        <a href="/Sagittarius"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico9} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Sagittarius (Nov 22 - Dec 21)</p>
                        </div></a>
                        <hr />
                        <a href="/Capricorn"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico10} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}>Capricorn (Dec 22 - Jan 19)</p>
                        </div></a>
                        <hr />
                        <a href="/Aquarius"><div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <img src={ico11} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginTop: '10px' }}> Aquarius (Jan 20 - Feb 18)</p>
                        </div></a>
                        <hr />
                        <a href="/Pisces"> <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
                            <img src={ico12} alt="landr1" style={{ width: 50, height: 40, borderRadius: '50%', marginBottom: '30px' }} />
                            <p style={{ color: 'black', fontFamily: 'Minion Pro', fontWeight: 'bold', marginBottom: '30px', marginTop: '10px' }}>Pisces (Feb 19 - Mar 20)</p>
                        </div></a>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Gemini;