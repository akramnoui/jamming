import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{`${this.props.track.artist} | ${this.props.track.album}`}</p>

        </div>
        {this.renderAction()}
        <a className="artist-history__item" href="spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ" id="A_1">
        <span className="order-number" id="SPAN_2">2</span><span className="artist__info" id="SPAN_3"><span className="track__cover" style={{
        backgroundImage: 'url("https://i.scdn.co/image/ab6761610000f1782f71b65ef483ed75a8b40437")'
      }} id="SPAN_4" /><span className="artist__summary" id="SPAN_5"><span className="artist__name" id="SPAN_6">The Weeknd</span>
        </span></span>
      </a>
      </div>
    );
  }
}
export default Track;
