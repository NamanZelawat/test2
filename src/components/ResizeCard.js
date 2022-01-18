import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditModal from './EditModal';

class ResizeCard extends Component 
{
  render()
  { 
    return (
      <Card key={this.props.text} sx={{ width : "100%", height : "100%" }}>
        <CardContent>
          <Typography key={this.props.text} variant="body2">
            {this.props.text}
          </Typography>
        </CardContent>
        <CardActions>
          <EditModal text="Add" submit={this.props.update}/>
          <EditModal text="Update" content={this.props.text} submit={this.props.update}/>
        </CardActions>
      </Card>
    );
  }
}

export default ResizeCard;