import React from 'react';

class App extends React.Component {
   render() {
      return (

      <div>
         <Header/>
         <Content/>
      </div>
      );
   }
}

class Header extends React.Component {
   render() {

      var myStyle = {
        fontSize: 100,
        color: '#FF0000'
      }
      return (
         <div>
          <h1 style = {myStyle}>Header</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      var i = 1;
      return (
         <div>
          <h2>Content</h2>
          <p>This is the content!!!</p>
          <p data-myattribute = "somevalue">{i == 1 ? 'hi' : 'bye'}</p>
         </div>
      );
   }
}

export default App;
