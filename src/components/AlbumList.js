import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  // used to fire instantly as soon as the component loads
  componentWillMount() {
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
       .then(response => this.setState({ albums: response.data }));

    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    //fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //.then((response) => response.json())
    //.then((responseData) => this.setState({ albums: responseData }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state.albums);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
