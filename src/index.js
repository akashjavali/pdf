import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Page, Text, View, Document} from '@react-pdf/react-pdf';
// import styled from '@react-pdf/styled-components';
// import { Flex, Box } from 'grid-styled'
import Table from './Table';
// import Grid from './Grid'
// import { Grid, GridItem } from 'styled-grid-component';
// import Hello from './Hello';
// import {Grid, GridCol} from 'griz';
import $ from "jquery";

export default class MyDoc extends Component {

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