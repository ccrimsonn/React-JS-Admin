import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import IconCard from "components/Cards/IconCard.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import CoursesList from "../../components/Requests/CoursesList";
// import { dataTable } from "variables/general.jsx";

class ReactTables extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      check: false,
      data: [],
    }
  }
  
  componentDidMount(){
   let courseList = new CoursesList();
   var result = [];
   courseList.allCourseInfo()
     .then(response => {
       /////////////////////
       this.setState({
         check: true,
         data: response.courList.map((prop,key) => {
           return ({
             
             id: key,
             name: prop.name,
             position: prop[1],
             office: prop[2],
             age: prop[3],
             test: prop[4],
             actions: (
               // we've added some custom button actions
               <div className="actions-right">
                 { /* use this button to add a like kind of action */ }
                 <IconButton
                   onClick={() => {
                     let obj = this.state.data.find(o => o.id === key);
                     alert(
                       "You've clicked LIKE button on \n{ \nName: " + obj.name
                       + ", \nposition: " + obj.position
                       + ", \noffice: " + obj.office
                       + ", \nage: " + obj.age + "\n}.");
                   }}
                   color="infoNoBackground"
                   customClass="like">
                   <Favorite />
                 </IconButton>{" "}
                 { /* use this button to add a edit kind of action */ }
                 <IconButton
                   onClick={() => {
                     let obj = this.state.data.find(o => o.id === key);
                     alert(
                       "You've clicked EDIT button on \n{ \nName: " + obj.name
                       + ", \nposition: " + obj.position
                       + ", \noffice: " + obj.office
                       + ", \nage: " + obj.age + "\n}.");
                   }}
                   color="warningNoBackground"
                   customClass="edit">
                   <Dvr />
                 </IconButton>{" "}
                 { /* use this button to remove the data row */ }
                 <IconButton
                   onClick={() => {
                     var data = this.state.data;
                     data.find((o,i) => {
                       if(o.id === key){
                         // here you should add some custom code so you can delete the data
                         // from this component and from your server as well
                         data.splice(i,1);
                         return true;
                       }
                       return false;
                     });
                     this.setState({data: data});
                   }}
                   color="dangerNoBackground"
                   customClass="remove">
                   <Close />
                 </IconButton>{" "}
               </div>
        
             )
           })
         })
       });
       response.courList.map((list)=> {
         result.push(list)
         
       })
       ////////////////////
     });
  
  }

    // let courseList = new CoursesList();
    //   courseList.allCourseInfo()
    //     .then(response=>{
    //       response.courList.map((list)=> {
    //         alert(list.id)
    //       })
    //     });
  
  render(){
    return (
      <GridContainer>
        {this.state.check !== false ?
        <ItemGrid xs={12}>
          <IconCard
            icon={Assignment}
            title="React Table"
            content={
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "Name",
                    accessor: "name",
                  },
                  {
                    Header: "Position",
                    accessor: "position"
                  },
                  {
                    Header: "Office",
                    accessor: "office"
                  },
                  {
                    Header: "Age",
                    accessor: "age"
                  },
                  {
                    Header: "Test",
                    accessor: "test"
                  },
                  {
                    Header: "Actions",
                    accessor: "actions",
                    sortable: false,
                    filterable: false,
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            }
          />
        </ItemGrid>
        :
        <p>loading</p>}
      </GridContainer>
    );
  }
}

export default ReactTables;
