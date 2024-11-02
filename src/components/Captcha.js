import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Captcha = ({ setCaptcha }) => {
    const [captchaImg, setCaptchaImg] = useState('');

    useEffect(() => {
        const fetchCaptcha = async () => {
            const res = await axios.get('/api/auth/captcha', { responseType: 'blob' });
            const imgUrl = URL.createObjectURL(res.data);
            setCaptchaImg(imgUrl);
        };
        fetchCaptcha();
    }, []);

    return (
        <div>
            <img src={captchaImg} alt="captcha" />
            <input type="text" placeholder="Enter captcha" onChange={(e) => setCaptcha(e.target.value)} required />
        </div>
    );
};

export default Captcha;
