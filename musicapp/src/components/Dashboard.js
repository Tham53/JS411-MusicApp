import React from "react";
import OnlineMode from "./OnlineMode";
import SoundQuality from "./SoundQuality";
import MasterVolume from "./MasterVolume";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      quality: 3,
      notifications: [
        "Your application is offline. You won't be able to share or stream music to other devices.",
        "Music quality is degraded. Increase quality if your connection allows it.",
        "Listening to music at a high volume could cause long-term hearing loss.",
      ],
      volume: this.props.volumeState,
      mute: false,
      previousVolume: this.props.volumeState,
    };
  }

  handleToggleChange = () => {
    this.setState({
      isOnline: !this.state.isOnline,
    });
  };

  handleQualityChange = (evt) => {
    this.setState({
      quality: evt.target.value,
    });
  };
  muteVolume = (event, value) => {
    let newMute = !this.state.mute;
    this.setState({
      mute: newMute,
      previousVolume: this.state.volume,
      volume: newMute ? 0 : this.state.previousVolume,
    });
  };
  handleChange = (event, value) => {
    this.setState({ volume: value });
  };

  render() {
    return (
      <div>
        <div className="cards">
          <OnlineMode
            isOnline={this.state.isOnline}
            handleToggleChange={this.handleToggleChange}
          />
          <SoundQuality
            quality={this.state.quality}
            handleQualityChange={this.handleQualityChange}
          />
          <MasterVolume
            mute={this.state.mute}
            previousVoume={this.state.previousVolume}
            volume={this.state.volume}
            muteVolume={this.muteVolume}
            handleChange={this.handleChange}
          />

        </div>
        <h2 className="system">SYSTEM NOTIFICATIONS</h2>
        {!this.state.isOnline && <div>{this.state.notifications[0]}</div>}{" "}
        {this.state.quality === 1 && <div>{this.state.notifications[1]}</div>}
        {this.state.volume > 80 && <div>{this.state.notifications[2]}</div>}
      </div>
    );
  }
}

export default Dashboard;
