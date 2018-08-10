import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Page, Image, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';
// import ReactPDF from '@react-pdf/react-pdf';
import $ from "jquery";
import ReactDOM from 'react-dom';
import Table from './Table';




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
            <Text>Why JSX</Text>
              <Text>React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

              Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. We will come back to components in a further section, but if you’re not yet comfortable putting markup in JS, this talk might convince you otherwise.

              React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

              With that out of the way, let’s get started!

              </Text>
              <Image
              style={styles.image}
              src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg"
               />
               
               
            </View>
            
          </Page>
        </Document>
        <br />
        <a href={this.state.blobUrl} download="discover.pdf"> Download </a>
      </div>
    )
  }};

// ReactPDF.render(MyDocument, `${__dirname}/example.pdf`);
ReactDOM.render(<MyDocument />, document.getElementById('root'));