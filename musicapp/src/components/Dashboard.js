import React from "react";
import OnlineMode from "./OnlineMode";
import SoundQuality from "./SoundQuality";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
      quality: 3,
      notifications: [
        "Your application is offline. You won't be able to share or stream music to other devices.",
        "Music quality is degraded. Increase quality if your connection allows it.",
        "Music quality is degraded. Increase quality if your connection allows it.",
      ],
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
        </div>
        <h2 className="system">SYSTEM NOTIFICATIONS</h2>
        {!this.state.isOnline && <div>{this.state.notifications[0]}</div>}{" "}
        {this.state.quality === 1 && <div>{this.state.notifications[1]}</div>}
      </div>
    );
  }
}

export default Dashboard;
