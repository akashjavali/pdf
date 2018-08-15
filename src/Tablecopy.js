import React, { Component } from 'react';
import { Page, Text, View, Document} from '@react-pdf/react-pdf';

class Table extends Component {
  state={
    columnData: [
      {
      id: 1,
      name: 'Name',
      key: 'organisation_name',
      link: 'organisation/'
      },
      {
      id: 2,
      name: 'Code',
      key: 'organisation_code',
      link: ''
      },
      {
      id: 3,
      name: 'Seller',
      key: 'seller__seller_name',
      link:''
      },
      {
      id: 4,
      name: 'City',
      key: 'city',
      link: ''
      },
      {
      id: 5,
      name: 'Country',
      key: 'country__country_name',
      link: ''
      }
      ],

      tableData: [{
        organisation_name: "Akash",
        seller__seller_name: "something",
        address:"abc post",
        city:"Bangalore",
        country__country_name:"India",
        id:83,
        organisation_code:"22312"
      },
      {
        organisation_name: "Akash2",
        seller__seller_name: "somethin423g",
        address:"abc post",
        city:"Bangalore",
        country__country_name:"India",
        id:83,
        organisation_code:"22312"
      },
      {
        organisation_name: "Akash3",
        seller__seller_name: "somethinsfeg",
        address:"abc post",
        city:"Bangalore",
        country__country_name:"India",
        id:83,
        organisation_code:"22312"
      },{
        organisation_name: "Akash4",
        seller__seller_name: "someth23423ing",
        address:"abc post",
        city:"Bangalore",
        country__country_name:"India",
        id:83,
        organisation_code:"22312"
      },{
        organisation_name: "Akash6",
        seller__seller_name: "something2342",
        address:"abc post",
        city:"Bangalore",
        country__country_name:"India",
        id:83,
        organisation_code:"22312"
      }]
  }
    render() { 
        return (
            <div className='container'>
            
            <Document>
            <Page>

              <View style={{ display: "flex", flexDirection: "column", flexBasis: 150,margin: "20px"}}>
              <View style={{flexDirection: 'row'}}>
              <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center", color: 'red'}} >
              <Text style={{ textAlign: "center" }}>{"Id"}</Text>
                </View>
             {
               this.state.columnData.map((val,key) => {
                 return(
                  <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center", color: 'red'}} key={key} >
                      <Text style={{ textAlign: "center" }}>{val.name}</Text>
                  </View>
                 )

               })
             }
             </View>
             
             {
                  this.state.tableData.map((val,key) => {
                 return(
                  <View style={{flexDirection: "row"}} key={key} >
                    <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center", color: 'red' }} key={key} >
                            <Text style={{ textAlign: "center" }}>{key + 1}</Text>
                    </View>
                  {
                    this.state.columnData.map((data, index) => {
                      return(
                        <View style={{ flex: 1, height: 50, borderWidth: 1, justifyContent: "center", color: 'red' }} key={key} >
                          <Text style={{ textAlign: "center" }}>{val[data.key]}</Text>
                        </View>
                      )
                    })
                  }
                   </View>
                 )
              })
             }
            </View>

            </Page>
             </Document>

             </div>
          );
    }
}
 

export default Table;