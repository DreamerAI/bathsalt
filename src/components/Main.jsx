import React from 'react';
import './Main.css';
import dataVideo from './dataVideo';

import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

let rand = Math.floor(Math.random() * dataVideo.length);
let randomVideo = dataVideo[rand];

const plyrProps = {
  source: {
    type: 'video',
    sources: [{ src: `${randomVideo}`, provider: 'youtube' }],
  },
  options: {
    autoplay: true,
    quality: { default: 720, options: [1080, 720, 576, 480, 360, 240] },
  },
};

function Main() {
  return (
    <>
      <div className="main container">
        <div className="main__video">
          <div className="video_frame">
            <Plyr {...plyrProps} />
          </div>
        </div>
        <div className="main__contacts">
          <div className="main__links">
            <a href="#asd" className="main__links_wrapper link__wildberries">
              <div className=" main__btn">Купить на Wildberries</div>
            </a>
            <a href="#asd" className="main__links_wrapper link__ozon">
              <div className=" main__btn">Купить на Ozon</div>
            </a>
            <a href="#asd" className="main__links_wrapper link__whatsapp">
              <div className=" main__btn">Связаться со мной</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
