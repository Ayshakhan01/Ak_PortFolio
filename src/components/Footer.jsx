import React from 'react';
import { GitHub, LinkedIn, Twitter,Copyright ,Mail, Instagram } from '@mui/icons-material';


export default function Footer() {
    return (
        <div>
            <br />
            <div className='footer' style={{ display: 'flex', gap: '30px', margin: '30px', alignItems: 'center', justifyContent: 'center' }}>
                <a href="mailto:t.ayshakhanam@gmail.com" className='footer-link' target='_blank' rel='noreferrer' title='Email'><Mail /></a>
                <a href="https://github.com/Ayshakhan01" className='footer-ink' target="_blank" rel='noreferrer' title='GitHub'><GitHub /></a>
                <a href="https://www.linkedin.com/in/aysha-khan-523264277/" className='footer-link' target="_blank" rel='noreferrer' title='LinkedIn'><LinkedIn /></a>
                <a href="https://x.com/Aysha_khan_01" className='footer-link' target="_blank" rel='noreferrer' title='Twitter'><Twitter /></a>
                {/* <a href="https://instagram.com/nombre_es_surya" className='footer-link' target="_blank" rel='noreferrer' title='Instagram'><Instagram /></a> */}
            </div>
            <p style={{textAlign:'center',alignItems:'center'}}><Copyright sx={{marginTop:'-2px'}} /> Developed by <a href="https://github.com/Ayshakhan01" className='footer-link' style={{textDecoration:'none',color:'#89CFF0'}} rel='noreferrer'>Aysha Khan</a></p>
        </div>
    )

}