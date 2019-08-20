import React from 'react';
import Search from "./apis/searchbar";
import Youtube from "./youtube"
import VideoDetail from "./videodetail"
import VideoList from "./videolist"

class App extends React.Component {
  state = { 
    videos: [],
    selectiveVideo: null
   }
  
   handleSubmit = async (termFromSearchBar) => {
     const response = await Youtube.get("/search", {
        params: {
          q: termFromSearchBar
        }  
     }
     )   
     this.setState({
       videos: response.data.items 
     })
    }

    handleVideoSelect = (video) => {
      this.setState({selectVideo: video})
    }

  render() { 
    return ( 
      <div className="ui container" style={{marginTop: "1em"}}>
        <Search handleForSubmit={this.handleSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList handleVideoSelect=
              {this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;