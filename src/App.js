import React, { Component } from "react";
import { Resizable } from "re-resizable";
import ResizeCard from "./components/ResizeCard";
import './App.css';

let baseurl = "https://test2apiz.herokuapp.com";

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      heightTopLeft : "49vh",
      heightTopRight : "49vh",
      heightBottom : "49vh",
      widthTopLeft : "49vw",
      widthTopRight : "49vw",
      widthBottom : "98vw",
      content1 : "",
      content2 : "",
      content3 : "",
    };
    this.fetchContent1 = this.fetchContent1.bind(this);
    this.fetchContent2 = this.fetchContent2.bind(this);
    this.fetchContent3 = this.fetchContent3.bind(this);
    
    this.updateContent1 = this.updateContent1.bind(this);
    this.updateContent2 = this.updateContent2.bind(this);
    this.updateContent3 = this.updateContent3.bind(this);
  }

  fetchContent1()
  {
    fetch(baseurl+"/api/content1", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then(
        (response) => {
          response.json().then((data) => {
            this.setState({content1:data[0].content});
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  fetchContent2()
  {
    fetch(baseurl + "/api/content2", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then(
        (response) => {
          response.json().then((data) => {
            this.setState({content2:data[0].content});
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  fetchContent3()
  {
    fetch(baseurl + "/api/content3", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then(
        (response) => {
          response.json().then((data) => {
            this.setState({content3:data[0].content});
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  updateContent1(text)
  {
    fetch(baseurl + "/api/content1", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          text : text
        }),
    })
      .then(
        (response) => {
          response.json().then(() => {
            window.location.reload();
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  updateContent2(text)
  {
    fetch(baseurl + "/api/content2", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text : text
      }),
    })
      .then(
        (response) => {
          response.json().then(() => {
            window.location.reload();
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  updateContent3(text)
  {
    fetch(baseurl + "/api/content3", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text : text
      }),
    })
      .then(
        (response) => {
          response.json().then(() => {
            window.location.reload();
          });
        },
        (error) => {
          alert("One",error);
        }
      )
      .catch((error) => {
        alert("Two",error);
      });
  }

  componentDidMount()
  {
    this.fetchContent1();
    this.fetchContent2();
    this.fetchContent3();
  }

  render()
  {
    return (
      <div className="App">
        <div className="topbox">
          <Resizable
            className="test"
            defaultSize={{
              width:this.state.widthTopLeft,
              height:this.state.heightTopLeft,
            }}
          >
            <ResizeCard text={this.state.content1} update={this.updateContent1}/>
          </Resizable>
          <Resizable
            className="test"
            defaultSize={{
              width:this.state.widthTopRight,
              height:this.state.heightTopRight,
            }}
          >
            <ResizeCard text={this.state.content2} update={this.updateContent2}/>
          </Resizable>
        </div>
        <Resizable
          className="test"
          defaultSize={{
            width:this.state.widthBottom,
            height:this.state.heightBottom,
          }}
        >
          <ResizeCard text={this.state.content3} update={this.updateContent3}/>
        </Resizable>
      </div>
    );
  }
}

export default App;