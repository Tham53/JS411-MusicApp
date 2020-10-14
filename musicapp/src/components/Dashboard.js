import React from "react";
import OnlineMode from "./OnlineMode";
import SoundQuality from "./Soundquality";
import MasterVolume from "./MasterVolume";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      quality: 3,
      notifications: [],
      volume: this.props.volumeState,
      mute: false,
      previousVolume: this.props.volumeState,
    };
  }

  componentDidUpdate() {
    console.log(this.state.notifications);
    console.log(this.state.quality);
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
    let toggleMessage;
    let qualityMessage;
    let volumeMessage;
    if (!this.state.isOnline) {
      this.state.notifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
      toggleMessage = (
        <div>
          {this.state.notifications[this.state.notifications.length - 1]}
        </div>
      );
    }
    if (this.state.quality === 1) {
      this.state.notifications.push(
        "Music quality is degraded. Increase quality if your connection allows it."
      );
      qualityMessage = (
        <div>
          {this.state.notifications[this.state.notifications.length - 1]}
        </div>
      );
    }
    if (this.state.volume > 80) {
      this.state.notifications.push(
        "Listening to music at a high volume could cause long-term hearing loss."
      );
      volumeMessage = (
        <div>
          {this.state.notifications[this.state.notifications.length - 1]}
        </div>
      );
    }
    return (
      <div>
        <h1 style={{paddingLeft: "20px"}}>Welcome!</h1>
        <div style={{display: "flex", justifyContent: "center"}}>
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
        {toggleMessage}
        {qualityMessage}
        {volumeMessage}
      </div>
    );
  }
}

export default Dashboard;