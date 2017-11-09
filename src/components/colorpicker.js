import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Grid from 'material-ui/Grid';
import { FormControlLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class PickerComponents extends Component {
	render() {
        return (
			<Grid container spacing={16}>
          		<Grid item xs={6}>
			   		<Typography type="headline">
        				Left Color
      				</Typography>
					<ChromePicker
            disableAlpha={true}
            color={ this.props.lColor }
            onChangeComplete={(newColor, event) => this.props.handleColor(this.props.index, newColor, 'lColor')}
          />
          		</Grid>
          		<Grid item xs={6}>
			   		<Typography type="headline">
        				Right Color
      				</Typography>
					<ChromePicker 
            disableAlpha={true}
            color={ this.props.rColor }
            onChangeComplete={(newColor, event) => this.props.handleColor(this.props.index, newColor, 'rColor')}
          />
          		</Grid>
       		</Grid>
        );
    }
}

const styles = theme => ({
  paper: {
    margin:10,
    padding: 50,
    color: theme.palette.text.primary,
  },
});

class ColorPicker extends Component {

	render(){
		let picker = null;
    const { classes } = this.props;

		if(!this.props.row.isRandomColor){
			picker = <PickerComponents 
        index={this.props.index} 
        lColor={this.props.row.lColor}
        rColor={this.props.row.rColor}
        handleColor={this.props.handleColor}/>
		}

		return (
      <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.paper}>
          <Typography type="display1">
            {this.props.row.rowName}
          </Typography>
          {picker}
          <FormControlLabel
          control={
            <Switch
              checked={this.props.row.isRandomColor}
              onChange={(event, checked) => this.props.handleRandomToggle(this.props.index, checked)}/>
          }
          label="Random Colors" />
        </Paper>
      </Grid> 
		);
	}
}

export default withStyles(styles)(ColorPicker);