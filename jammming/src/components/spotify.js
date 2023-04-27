import axios from 'axios';

// Create an object to store the Spotify methods
const Spotify = {
  // Define a variable to store the access token
  accessToken: null,

  // Define a method to get the access token from Spotify
  getAccessToken() {
    // If the access token is already set, return it
    if (this.accessToken) {
      return this.accessToken;
    }
    // Otherwise, check if the access token is in the URL
    const url = window.location.href;
    const token = url.match(/access_token=([^&]*)/);
    const expiry = url.match(/expires_in=([^&]*)/);
    // If the access token and expiry time are in the URL, set them and clear the URL
    if (token && expiry) {
      this.accessToken = token[1];
      const expiresIn = Number(expiry[1]);
      window.setTimeout(() => this.accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return this.accessToken;
    }
   // Otherwise, redirect the user to the Spotify authorization page
   else {
    const clientId = 'c734740b941e4501afad5bb4fa840a27'; // Replace with your client ID
    const redirectUri = 'http://localhost:3000/'; // Replace with your redirect URI
    const scope = ''; // Replace with your desired scope
    const responseType = 'token';
    const state = ''; // Replace with your state value
    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=${state}`;
    window.location = authorizeUrl;
  }
},

  // Define a method to search for tracks on Spotify
  search(term) {
    // Get the access token
    const accessToken = this.getAccessToken();
    // Make a GET request to the Spotify API with the term as query parameter
    return axios.get(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      // If the response has tracks, map them to an array of track objects
      if (response.data.tracks) {
        return response.data.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
      // Otherwise, return an empty array
      else {
        return [];
      }
    });
  },

  // Define a method to save a playlist to Spotify
  savePlaylist(trackURIs) {
    // If there are no track URIs, return
    if (!trackURIs || trackURIs.length === 0) {
      return;
    }
    // Get the access token and set the headers for the API requests
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    // Declare a variable to store the user ID
    let userId;
    // Make a GET request to get the user ID from Spotify
    return axios.get('https://api.spotify.com/v1/me', { headers: headers })
      .then(response => {
        // Set the user ID variable with the response data
        userId = response.data.id;
        // Make a POST request to create a new playlist with a name
        return axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, 
          { name: 'My Playlist' }, 
          { headers: headers });
      })
      .then(response => {
        // Get the playlist ID from the response data
        const playlistId = response.data.id;
        // Make a POST request to add the tracks to the playlist
        return axios.post(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, 
          { uris: trackURIs }, 
          { headers: headers });
      });
  }
};

// Export the Spotify object
export default Spotify;