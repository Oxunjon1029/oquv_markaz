import React, { useState } from 'react';
import './loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true)
    return (
        <div>
              
              <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader;
