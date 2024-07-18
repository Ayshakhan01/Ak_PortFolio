import React from 'react';
import { Row, Col } from 'react-bootstrap';
import rkv1 from '../images/rkv1.png';
// import hackerrank from '../images/hackerrank.png';
import leetcode from '../images/leetcode.png';
import geeksforgeeks from '../images/gfg.png';

export default function About() {
    return (
        <div className='about container' id='about' style={{ marginTop: '4cm' }}>
            <h2 style={{ color: '#89CFF0' }}>About</h2><br />
            <Row>
                <Col md={4}>
                    <a href="https://shorturl.at/mpK02" target='_blank' rel='noreferrer'><img src={rkv1} className='rkv' width='300' height='300' alt="rkv" title="IIIT RK Valley" /></a>
                </Col>
                <Col md={8}>
                    <p style={{ margin: '20px', fontSize: '17px' }}>
                        {/* I am <span style={{ color: '#89CFF0' }}>K Lakshmi Surya Teja</span>, and I am currently pursuing a 6-year Integrated B.Tech program in Computer Science Engineering at IIIT RGUKT RK Valley. Here, I have been excelling academically with a CGPA of <span style={{ color: '#89CFF0' }}>8.37</span> in the first 5 semesters and <span style={{ color: '#89CFF0' }}>9.60</span> in PUC. I am a passionate developer, and currently, I am honing my skills in <span style={{ color: '#89CFF0' }}>MERN Stack</span> by building projects. I have experience with MySQL, MongoDB, and Firebase databases. Additionally, I have the habit of solving DSA problems on various platforms like <span style={{ color: '#89CFF0' }}>HackerRank, Geeks for Geeks, LeetCode </span> which enhances my problem-solving skills. I'm very eager to leverage my skills in the world of technology and contribute to its advancement. */}
                        I am <span style={{ color: '#89CFF0' }}>Aysha Khan</span>, currently enrolled in a 6-year Integrated B.Tech program in Computer Science Engineering at IIIT RGUKT RK Valley. Academically, I have achieved a CGPA of <span style={{ color: '#89CFF0' }}>9.00</span> in the first 5 semesters and <span style={{ color: '#89CFF0' }}>9.67</span> in PUC. As a passionate developer, I am currently enhancing my skills in the <span style={{ color: '#89CFF0' }}>MERN Stack</span> and <span style={{ color: '#89CFF0' }}>Cyber Security</span> by working on various projects. I frequently solve DSA problems on platforms like <span style={{ color: '#89CFF0' }}>Geeks for Geeks</span> and <span style={{ color: '#89CFF0' }}>LeetCode</span>, which helps improve my problem-solving abilities. I am eager to apply my skills in the technology field to contribute to its advancement.
                    </p>
                    <div className='dsa-links'>
                        <a href="https://www.geeksforgeeks.org/user/tayshaktc7n/" title='Geeks for Geeks'><img src={geeksforgeeks} className='dsa' width='90' alt="Geeks for Geeks" /></a>
                        {/* <a href="https://www.hackerrank.com/profile/klsteja1612" title='HackerRank'><img src={hackerrank} className='dsa' width='68' alt="Hacker Rank" /></a> */}
                        <a href="https://leetcode.com/u/Aysha_khan_001/" title='LeetCode'><img src={leetcode} className='dsa' width='58' alt="LeetCode" /></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}