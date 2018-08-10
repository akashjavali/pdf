import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';
// import ReactPDF from '@react-pdf/react-pdf';
import $ from "jquery";

import ReactDOM from 'react-dom';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
class MyDocument extends React.Component {
  state = {blobUrl: ''};
  componentDidMount(){
    var scope = this;
    console.log(scope.state);
    $('iframe').on('load', function(){
      scope.setState({blobUrl: $('#root iframe').contents()["0"].URL});
    });

  }

  render() { 

    return(
      <div>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>
        <a href={this.state.blobUrl} download="discover.pdf">Download</a>
      </div>
    )
  }};

// ReactPDF.render(MyDocument, `${__dirname}/example.pdf`);
ReactDOM.render(<MyDocument />, document.getElementById('root'));