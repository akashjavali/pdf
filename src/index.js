import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Page, Text, View, Document} from '@react-pdf/react-pdf';
import Table from './Table';

import $ from "jquery";



class MyDoc extends Component {

    state = {blobUrl: ''};
    componentDidMount(){
    var scope = this;
    console.log(scope.state);
    $('iframe').on('load', function(){
      scope.setState({blobUrl: $('#root iframe').contents()["0"].URL});
    });
}
    render() { 

        return (
            <div>
            
            <Table />
            
             <br />
             <a href={this.state.blobUrl} download="discover.pdf"> Download </a>
             </div>
          );
    }
}
 

ReactDOM.render(<MyDoc />, document.getElementById('root'));