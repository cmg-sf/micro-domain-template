import React, { Component } from 'react'

import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: ''
    }
  }
  handleChange(val){
    this.setState({
      search: val
    })
  }
  search(e){
    e.preventDefault();
    window.location.assign(`https://stockfootage.com/?s=${this.state.search}&post_type=product`);
  }
  render() {
    return (
      <div className="App">

        <div className="bg-video-container">
          <video className="bg-video" loop="1" autoPlay="1" playsInline="" muted="1" data-bgvideo="" poster="./img/SF Logo.jpg" data-bgvideo-fade-in="500" data-bgvideo-pause-after="120" data-bgvideo-show-pause-play="false" data-bgvideo-pause-play-x-pos="right" data-bgvideo-pause-play-y-pos="top">
            <source src="/assets/bg-video.mp4" type="video/mp4"/>
            <source src="/assets/bg-video.mp4" type="video/webm"/>
            <source src="/assets/bg-video.mp4" type="video/ogg"/>
          </video>
        </div>

        <div id="vidtop-content">
          <header>
            <div></div>
            <a className="nav-link" href="https://stockfootage.com/">HOME</a>
            <a className="nav-link" href="https://stockfootage.com/shop">SHOP</a>
            <a className="nav-link" href="https://stockfootage.com/my-account">LOGIN</a>
          </header>
          <div className="interact-box">
            <h1>{'{DOMAIN}'}</h1>
            <img src="https://stockfootage.com/wp-content/uploads/2016/10/RedWhite_DS-380x252.png" alt=""/>
            <form className="search" onSubmit={e=>this.search(e)}>
              <input placeholder="Search" onChange={e=>this.handleChange(e.target.value)} value={this.state.search} type="text"/>
            </form>
          </div>
        </div>

        <div className="info-sec">
          <section><h1>{'{MAIN SUBJECT}'} <a className="rf" href="https://en.wikipedia.org/wiki/Royalty-free">Royalty-free</a> Stock Video Footage Marketplace</h1></section>
          <div className="hr-red"/>
          <section className="catagory-sec">
            <h1>Browse by Catagory</h1>
            <div className="catagories">
{'{categories}'}
            </div>
          </section>
          <br/>
          <div className="hr-red"/>
          <section className="contributors">
            <h1><span className="contrib-show">Contributors Showcase</span> - Inspired to Create</h1>


            <div className="contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt1" width="350" height="195" src="{'{yt1}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt2" width="350" height="195" src="{'{yt2}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt3" width="350" height="195" src="{'{yt3}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <div className="mobile-contributor-previews">
              <div className="contributor-preview">
                <iframe title="yt4" width="250" height="150" src="{'{yt1}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt5" width="250" height="150" src="{'{yt2}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="contributor-preview">
                <iframe title="yt6" width="250" height="150" src="{'{yt3}'}" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>

            <br/>
            <p>{'{site-text}'}</p>
          </section>
          <br/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
