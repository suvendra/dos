import React, { Component } from 'react';
import { Redirect, Route, Switch , Link , className } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Container , Button, Row, Col } from 'reactstrap';
import moment from 'moment';
import DatePicker from 'react-datepicker' ;
import 'react-datepicker/dist/react-datepicker.css';
import classNames from 'classnames';
import { AppSwitch , AppSidebarToggler , AppHeader ,AppSidebar } from '@coreui/react'
import { dossierApiRouter } from '../../api/appApiManager';

import navigation from '../../_nav';
import DefaultHeader from './DefaultHeader';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sideBar : [],
      startDate: moment(),
      endDate : moment()
    };
    //this.handleLoad = this.handleLoad.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
  //table data start 
    this.state = {
      data: [
      {'id':1,1:'',2:'Class1',3:'Class2',4:'Class3',5:'Class4',6:'Class5',7:'Class6'},
      {'id':2,1:'MONDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
      {'id':3,1:'TUESDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
      {'id':4,1:'WEDNESDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
      {'id':5,1:'THURSDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
      {'id':6,1:'FRIDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'}
  ],
  errorInput:''
  };
  this.submitStepSignupForm = this.submitStepSignupForm.bind(this);
  this.appendColumn = this.appendColumn.bind(this);
  //table data end

  }


//table data start 
submitStepSignupForm(id,value){
    console.log(this.props,'signup4');
      let newArray = this.state.data.slice();
      newArray.push({'id':id,'value':value});
    this.setState({col : newArray});
}

// append column to the HTML table
appendColumn() {
         let obj =  this.state.data.map((p) => {
              let size = Object.keys(p).length;
              p[size+1] = '-';
              return p;
         });
         this.setState({data:obj});
}
// edit Column

// edit Column
editColumn(p,k,e) {
  let inputValue = e.target.innerText;
    let obj = p.p;
   let objId = obj.id;
   let position = k.k;
   let values = Object.values(obj);
   if(values.indexOf(inputValue) == -1){
        obj[position] = inputValue;
        let stateCopy = this.state.data;
        stateCopy.map((object,index) =>{
             if(object.id == objId){
                  object = obj[position];
             }
        })
        this.setState(stateCopy);
        this.setState({errorInput:''});
        console.log(stateCopy,'stateCopystateCopy');
   }else{
        this.setState({errorInput:'This period is also available in your list'});
        return false;
   }
}

//table data end 

//constructor for loading menu
  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  
  // handleLoad() {
  //   dossierApiRouter("dashboard")
  //   .then(data => {
  //       this.setState({sideBar: data});
  //   }); 
  // }

  //menu function end
  
  //date picker function call
  dynamicTable(){
    console.log("hgfsdfgdfgsfts")
    console.log(this.state.startDate);
    let todayTime = new Date(this.state.startDate);
    let month = todayTime.getMonth() + 1;
    let day = todayTime.getDate();
    let year = todayTime.getFullYear();
    let newStartDate = year + "-" +  month + '-' +  day

    let todayTime_e = new Date(this.state.endDate);
    let month_e = todayTime_e.getMonth() + 1;
    let day_e = todayTime_e.getDate();
    let year_e = todayTime_e.getFullYear();
    let newEndDate = year_e + "-" +  month_e + '-' +  day_e

    dossierApiRouter("get_dashboard", {}, { id : 1, start_date: newStartDate, end_date: newEndDate})
    .then(data => {
        this.setState({sideBar: data});
    }); 
  }


  //date function call 
  startDateChange(date) {
    this.setState({
      startDate: date,
    });
  }
  endDateChange(date) {
    this.setState({
      endDate : date
    });
  }
//table function end 

  render() {
    //table function
    let tableStyle = {
        align:"center"
    };

    let list = this.state.data.map(p =>{
        return (
            <tr className="grey2" key={p.id}>
                {Object.keys(p).filter(k => k !== 'id').map(k => {
                    return (
                        <td className="grey1" key={p.id+''+k}>
                            <div suppressContentEditableWarning="true" contentEditable="true" value={k} onInput={this.editColumn.bind(this,{p},{k})}>
                                {p[k]}
                            </div>
                        </td>
                    );
                })}
            </tr>
        );
    });
    //table function end 

    //menu function
    const { children, ...attributes } = this.props;
    // const { sideBar } = this.state; 

    const sideBar = [
      {
          "name": "chart1 - Dashboard",
          "id": 1
      },
      {
          "name": "PremiumChart",
          "id": 2
      }
    ]
    
    let tifOptions = []
    if (sideBar.length > 0) {
      Object.keys(sideBar).forEach(function(key) {
        console.log(sideBar[key].id);
        tifOptions.push(<p value={sideBar[key].id}>{sideBar[key].name}</p>)
      });
    }
    //if (this.state.sideBar.length > 0 ) {
      if (sideBar.length > 0 ) {
      return (
        <div className="app">
          <AppHeader fixed>
            <DefaultHeader />
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <div class="side-menu">
                {tifOptions}
              </div>
            </AppSidebar>
            <main class="dashboardmain">
              <Container fluid>
                <Row>
                    <Col xs="12" sm="4">
                      <h5>Start Date</h5>
                      <DatePicker selected={this.state.startDate} onChange={this.startDateChange}  dateFormat="YYYY-MM-DD"/>
                    </Col>
                    <Col xs="12" sm="4">
                      <h5>End Date</h5>
                      <DatePicker selected={this.state.endDate} onChange={this.endDateChange} dateFormat="YYYY-MM-DD" />
                    </Col>
                    <Col xs="12" sm="4">
                      <Button type="submit" size="sm" color="primary" onClick={this.dynamicTable.bind(this)}>Submit</Button>
                    </Col>
                </Row>
                {/* table data call */}
                <fieldset className="step-4">
                  <div className="heading">
                      <h3>Table Record </h3>
                  </div>
                  <div className="schedule padd-lr">
                      <table cellSpacing="3" id="mytable" style={tableStyle}>
                          <tbody>{list}</tbody>
                      </table>
                  </div>
                </fieldset>
                {/* table data call end  */}
              </Container>
            </main>
          </div>
        </div>
      );
    } else{
      return (<p>Hello</p>);
    }

  }
}

export default DefaultLayout;
