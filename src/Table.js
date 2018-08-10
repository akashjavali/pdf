import React, { Component } from 'react';
// import { Page, Text, View, Document} from '@react-pdf/react-pdf';

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
            
            <table >
              <tr>
                <th>FN</th>
                <th>LN</th>
                <th>Place</th>
              </tr>
              <tr>
                <td>A</td>
                <td>J</td>
                <td>M</td>
              </tr>
              <tr>
                <td>N</td>
                <td>L</td>
                <td>P</td>
              </tr> 
              
              

            </table>

             </div>
          );
    }
}
 

export default Table;