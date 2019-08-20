import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {

    render() {
        return (

            <div className='TrackList'>
            {console.log(`>>>>> ${this.props.tracks}`)}
               
                {   
                 
                     this.props.tracks.map((track) => {
                         return <Track isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} onAdd={this.props.onAdd} key={track.id} name={track.name} id={track.id} artist={track.artist} album={track.album}/>
                     })
                }
      
            </div>
        )
    }
}

export default TrackList