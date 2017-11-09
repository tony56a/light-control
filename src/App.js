import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import request from 'superagent';
import update from 'immutability-helper';

import TitleBar from './components/titlebar';
import ColorPicker from './components/colorpicker';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    margin:10,
    padding: 50,
    color: theme.palette.text.primary,
  },

});

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        rows: [{rowName:"First Row",
        isRandomColor: false,
        lColor: { r: 0, g: 0, b: 0 },
        rColor:{ r: 0, g: 0, b: 0 },},
        { rowName:"Second Row",
          isRandomColor: false,
          lColor: { r: 0, g: 0, b: 0 },
          rColor:{ r: 0, g: 0, b: 0 },},
        { rowName:"Third Row",
          isRandomColor: false,
          lColor: { r: 0, g: 0, b: 0 },
          rColor:{ r: 0, g: 0, b: 0 },}]
      };
      this.handleColor = this.handleColor.bind(this);
      this.handleRandomToggle = this.handleRandomToggle.bind(this);
      this.fetchLightState = this.fetchLightState.bind(this);
      this.onFetchRequestFinish = this.onFetchRequestFinish.bind(this);
      this.setLightState = this.setLightState.bind(this);
      this.onSetRequestFinish = this.onSetRequestFinish.bind(this);
      this.url='http://192.168.1.200';

  }

  handleRandomToggle(index, checked) {
    let newRows = update(this.state.rows, 
                          {[index]: { isRandomColor: {$set: checked}}});
    this.setState({rows: newRows});
  }

  handleColor(index, newColor, colorKey) {
    let newRows = update(this.state.rows, 
                          {[index]: { [colorKey]: {$set: newColor.rgb}}});
    this.setState({rows: newRows});
  }

  fetchLightState() {
    let req = request.get(this.url+"/status");

    req.end(this.onFetchRequestFinish);
  }

  onFetchRequestFinish(err, res) {
    let remoteState = JSON.parse(res.text);
    let newObj = Object.assign([], this.state.rows);
    for(var row in remoteState.data){ 
      newObj = update(newObj, {[row]: {$merge: remoteState.data[row]}});
    }
        
    this.setState({rows: newObj});
  }

  setLightState() {
    let req = request.post(this.url+"/set");
    req.send(JSON.stringify(this.state.rows));
    req.end(this.onSetRequestFinish);
  }

  onSetRequestFinish(err, res) {
    console.log(res);
  }

  render() {
    const { classes } = this.props;

    const listItems = this.state.rows.map((row,index) => <ColorPicker 
                                                              index={index}
                                                              key={row.rowName.toString()}
                                                              row={row}
                                                              handleRandomToggle={this.handleRandomToggle}
                                                              handleColor={this.handleColor}/>);

    return (
      <div className="App">
        <TitleBar titleText="Light Control" setLightState={this.setLightState} fetchLightState={this.fetchLightState}></TitleBar>
        <Grid container className={classes.root} align="center" spacing={8}>
          {listItems}
        </Grid>
      </div>
    );
  }


  componentDidMount(){
    document.body.style.backgroundColor = "#eee";
    this.fetchLightState();
  }
  componentWillUnmount(){
    document.body.style.backgroundColor = null;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
