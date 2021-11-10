import * as React from 'react';
import Add from '../Add/Add';
import Status from '../Status/Status'; 
import ObservableHelper from '../../helpers/Observable'; 
import Header from '../Header/Header';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import Result from '../Result/Result';
import Search from '../Search/Search';
import './App.css';

class App extends React.Component {

  public componentWillMount() {
    ObservableHelper.on('onSearch', (payload: any) => {
      console.log('Fired!');
      console.log(payload);
    });
  }

  public render() {
    return (
      <div className="AppComp">
        <Header />
        <Search />
        <Add />
        <Status />
        <Result />
        <RegisterPopup />
      </div>
    );
  }
}

export default App;
