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