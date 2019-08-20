import React from 'react';

class Track extends React.Component {
    constructor(props) {
        super(props)
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd({name: this.props.name, album: this.props.album, artist:this.props.artist, id: this.props.id })
    }

    removeTrack(){
        this.props.onRemove({name: this.props.name, album: this.props.album, artist:this.props.artist, id: this.props.id })
    }

    renderAction(isRemoval) {
        if(isRemoval) {
            return (<button onClick= {this.removeTrack} className="Track-action">-</button>)
        } else {
            return (<button onClick= {this.addTrack} className="Track-action">+</button>)
        }

    }
    render() {
        return (
            
            <div className="Track">
                <div className="Track-information">
                <h3>{this.props.name}</h3>
                <p>{this.props.artist} | {this.props.album}</p>
                </div>
                {this.renderAction(this.props.isRemoval)}
            </div>
        )
    }
}

export default Track;