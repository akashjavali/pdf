import React, { Component } from 'react';
import { Page, Text, View, Document, Image, StyleSheet} from '@react-pdf/react-pdf';



const styles = StyleSheet.create({
  page: { flexDirection: 'row' },
  image: { width: 400, height: 400, marginTop: 40 }
});

class Table extends Component {
  state={
    columnData: [
      {
      id: 1,
      name: 'INSTRUMENT',
      key: 'organisation_name',
      link: 'organisation/'
      },
      {
      id: 2,
      name: 'TOTAL',
      key: 'organisation_code',
      link: ''
      },
      {
      id: 3,
      name: 'ALOTTED',
      key: 'seller__seller_name',
      link:''
      },
      {
      id: 4,
      name: 'UNALLOTTED',
      key: 'city',
      link: ''
      }
      ],

      tableData: [{
        organisation_name: "LOI(3.0)",
        seller__seller_name: "37",
        address:"abc post",
        city:"3",
        country__country_name:"India",
        id:83,
        organisation_code:"40"
      },
      {
        organisation_name: "VVI(1.0)",
        seller__seller_name: "8",
        address:"abc post",
        city:"2",
        country__country_name:"India",
        id:83,
        organisation_code:"10"
      }
      ]
  }
    render() { 
        return (
            <div className='container'>
            
            <Document>
              <Page  >

                  <View style={{ display: "flex", flexDirection: "column", flexBasis: 150,margin: "20px"}}>
                  
                  <View style={{flexDirection: 'row'}}>
                  <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center",backgroundColor: "#1aa388"}}> 
                  <Text style={{ textAlign: "center", fontSize: 12}}>ORGANISATION CREDITS</Text>
                  </View>
                  </View>
                  

                  <View style={{flexDirection: 'row'}}>
                  
                
                {
                  this.state.columnData.map((val,key) => {
                    return(
                      <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center"}} key={key} >
                          <Text style={{ textAlign: "center", fontSize: 12}}>{val.name}</Text>
                      </View>
                    )

                  })
                }
                </View>
                
                
                {
                      this.state.tableData.map((val,key) => {
                    return(
                      <View style={{flexDirection: "row"}} key={key} >
                        
                      {
                        this.state.columnData.map((data, index) => {
                          return(
                            <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center" }} key={key} >
                              <Text style={{ textAlign: "center", fontSize: 12 }}>{val[data.key]}</Text>
                            </View>
                          )
                        })
                      }
                      </View>
                    )
                  })
                }
                <View style={{ justifyContent:'center'}}>
                </View>
                </View>
              </Page>
             </Document>

             </div>
          );
    }
}
 

export default Table;