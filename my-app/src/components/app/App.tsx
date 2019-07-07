import React from 'react';
import Header from '../header/Header';
import Marvel from '../marvel/Marvel';


class App extends React.Component {

  constructor(props:any) {
    super(props);  
  }

  render() {
    return(
       <div className="App">
           <Header/>
           <Marvel />
       </div>

     )
  } 
}

export default App;
