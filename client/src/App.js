import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    soundfile: null
  }

  onFileChange = (event) => {
    const soundfile = URL.createObjectURL(event.target.files[0]);
    this.setState({ soundfile });
  }

  moveSeconds = (event, seconds) => {
    this.refs.audioPlayer.currentTime += seconds;
  }

  render() {
    return (
      <div className="container">
        <div className="top-margin"></div>
        <input type="file" onChange={this.onFileChange} className="custom-file-upload" />
        <audio ref="audioPlayer" controls src={this.state.soundfile}></audio>
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, -10)}>{'<<'} 10s  </button>
            </div>
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, 10)}>10s {'>>'} </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, -30)}>{'<<'} 30s  </button>
            </div>
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, 30)}>30s {'>>'} </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, -120)}>{'<<'} 2 min  </button>
            </div>
            <div className="col">
              <button className="btn-control" onClick={(e) => this.moveSeconds(e, 120)}>2 min {'>>'} </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
