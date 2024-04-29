import React from 'react'

const CorrectedIframe = ({src}) =>{
    return(
        <iframe
            style={{ borderRadius: '12px' }}
            src={src}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"></iframe>
    );
}

export default CorrectedIframe;