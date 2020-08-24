import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "ToMjGplHPoYqSg7oACc"
    }
  }

  search = (query) => {
    giphy('LCYsF40QlC5C4OzV8wYJ9tarioeE7DFi').search({
          q: query,
          rating: 'g',
          limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        });
          // Res contains gif data!
      });
    //  API Call
  }

  render() {
    return(
      <div>
          <div className="left-scene">
            <SearchBar searchFunction={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs ={this.state.gifs} />
          </div>
      </div>
      );

  }
}



export default App;
