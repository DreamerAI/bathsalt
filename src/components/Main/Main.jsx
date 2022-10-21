import React from 'react';
import './Main.css';
import dataVideo from './dataVideo';

import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

function Main() {
  let rand = Math.floor(Math.random() * dataVideo.length);
  let randomVideo = dataVideo[rand];

  const plyrProps = {
    source: {
      type: 'video',
      sources: [{ src: `${randomVideo}`, provider: 'youtube' }],
    },
    options: {
      autoplay: false,
      youtube: { noCookie: false, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 },
    },
  };

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
            <a
              href="https://www.wildberries.ru/catalog/95336441/detail.aspx"
              className="main__links_wrapper link__wildberries">
              <div className=" main__btn">Купить на Wildberries</div>
            </a>
            <a
              href="https://www.ozon.ru/context/detail/id/660925397/"
              className="main__links_wrapper link__ozon">
              <div className=" main__btn">Купить на Ozon</div>
            </a>
            <a href="https://wa.me/79296045505" className="main__links_wrapper link__whatsapp">
              <div className=" main__btn">Связаться со мной</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
