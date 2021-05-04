import Wrapper from './components/Wrapper/Wrapper'
import Card from './components/Card/Card'
import React from 'react';
import shamp1 from './img/shamp1.png'
import shamp1alt from './img/shamp1alt.png'
import shamp2 from './img/shamp2.png'
import shamp2alt from './img/shamp2alt.png'
import shamp3 from './img/shamp3.png'
import shamp3alt from './img/shamp3alt.png'

const decsr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'


class App extends React.Component {
  state = {
  };

  render() {
    return (
    <Wrapper>
        <Card img={shamp1} altImg={shamp1alt} name='Шампунь' description={decsr} id='1'/>
        <Card img={shamp2} altImg={shamp2alt} name='Шампунь' description={decsr} id='2'/>
        <Card img={shamp3} altImg={shamp3alt} name='Шампунь' description={decsr} id='3'/>
    </Wrapper>
  );
  }

}

export default App;
