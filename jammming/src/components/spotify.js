import axios from 'axios';

// Define the Spotify module as an object
const Spotify = {
  // Define the access token and expiration time variables
  accessToken: '',
  expiresIn: 0,

  // Define a method to get the access token
  getAccessToken() {
    // If the access token is already set, return it
    if (this.accessToken) {
      return this.accessToken;
    }

    // Otherwise, check the URL for the access token and expiration time parameters
    const url = window.location.href;
    const accessTokenMatch = url.match(/access_token=([^&]*)/);
    const expiresInMatch = url.match(/expires_in=([^&]*)/);

    // If both parameters are found, set them and clear the URL
    if (accessTokenMatch && expiresInMatch) {
      this.accessToken = accessTokenMatch[1];
      this.expiresIn = Number(expiresInMatch[1]);
      window.history.pushState('Access Token', null, '/');
      // Set a timeout to clear the access token when it expires
      setTimeout(() => this.accessToken = '', this.expiresIn * 1000);
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

  // Define a method to search for tracks
  search(term) {
    // Get the access token
    const accessToken = this.getAccessToken();
    // Define the headers for the request
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    // Define the endpoint for the search query
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    // Make an axios request to the endpoint with the headers
    return axios.get(endpoint, {headers: headers})
      .then(response => {
        // Return an array of track objects with the relevant properties
        return response.data.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }

  // Add other methods here

};

// Export the Spotify module
export default Spotify;