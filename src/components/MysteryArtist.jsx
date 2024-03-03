import React from 'react';
import "./MysteryArtist.css";

function MysteryArtist(props) {
    return (
        <div className="mystery">
            <div className="row flex items-center">
                <div className="col-lg-6 p-6">
                    <h2>
                        Who is the
                        <br />
                        <span className="font-dreamland">Mystery Artist?</span>
                    </h2>
                    <p>
                        <br />
                    </p>
                    <p>
                        Watch the mystery artist perform live at <span className='font-dreamland'>Srijan '24.</span> The artist will be revealed soon. Stay tuned for more updates.
                    </p>
                </div>
                <div className="p-6 col-lg-5 offset-lg-1">
                    <img src="/assets/mystery_artist.svg" className="img img-fluid mx-auto" alt="" data-shape="web_editor/geometric/geo_square_2" data-original-mimetype="image/jpeg" data-file-name="s_text_image.svg" data-shape-colors=";;;;" loading="lazy" />
                </div>
            </div>
        </div>
    );
}

export default MysteryArtist;