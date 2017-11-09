import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AutoRenewIcon from 'material-ui-icons/Autorenew';
import BackupIcon from 'material-ui-icons/Backup';

const styles = theme => ({
  button: {
    marginRight: 5,
  },
  flex: {
    flex: 1,
    textAlign: "left",
  },
});

class TitleBar extends Component {

  render() {
    const { classes } = this.props;

    return (<AppBar position="static" >
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                {this.props.titleText}
              </Typography>
              <IconButton color="contrast" onClick={(event) => this.props.fetchLightState()} className={classes.button}>
                <AutoRenewIcon/>
              </IconButton>
              <IconButton color="contrast" onClick={(event) => this.props.setLightState()} className={classes.button}>
                <BackupIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>);
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
  titleText: PropTypes.string.isRequired,
};

export default withStyles(styles)(TitleBar);