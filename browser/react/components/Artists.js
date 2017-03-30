import React from 'react';
import { Link } from 'react-router';

const Artists = (props) => {

  const artists = props.artists;
  console.log("PROPS TO ARTISTS", props)

  return (

    <div>
      <h3>Artists</h3>
      <div className="list-group">
        {
          artists.map(artist => {
            return (
              <div className="list-group-item" key={artist.id}>
                <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
              </div>
            );
          })
        }
      </div>


    </div>
  );
}

export default Artists;
