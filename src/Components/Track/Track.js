import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    console.log(this.props.track)
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          {" "}
          -{" "}
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          {" "}
          +{" "}
        </button>
      );
    }
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        
        <img id="SPAN_4" src={this.props.track.image.url} />     
     
        <div className="Track-information">
          <div className="track-name">
          <h3>{this.props.track.name}</h3>
          </div>
          <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>

        </div>
        {this.renderAction()}
       
      </div>
    );
  }
}
export default Track;
