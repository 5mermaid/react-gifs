import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      selectedGifId:"iVObrJwHQf9Nm"
    }
    this.search("di");
  }


  search = (query) => {
  giphy('LCYsF40QlC5C4OzV8wYJ9tarioeE7DFi').search({
          q: query,
          rating: 'g'
      },  (err, res) => {
        this.setState({
          gifs: res.data
        });
      });
  }

   selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return(
      <div>
        <div className="left-scence">
        <SearchBar searchFunction={this.search} />
        <div className="selected-gif">
        <Gif id={this.state.selectedGifId} />
        </div>
        </div>
        <div className="right-scence">
        <GifList gifs={this.state.gifs} selectedGif ={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
