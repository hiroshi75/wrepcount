import React from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {onNumChange} from '../actions';

class Calc extends React.Component{
    constructor(props){
        super(props);
        this.initialState = {
            weight:0,
            rep:0,
            nextWeight:0,
            nextRep: 0
        };
    }
    updateInput = input => {
        console.log("input");
        console.log(input);
        this.setState({ input });
        this.props.onNumChange(input);
    };
//const Calc =({weight,rep,nextWeight,nextRep}) => {
    render(){
        const a = this.props.calc || this.initialState;
        console.log("a");
        console.log(a);
        const {weight,rep,nextWeight, nextRep} =a;
        console.log("RENDER")
        console.log([weight,rep,nextWeight,nextRep]);;
  return (
    <Paper>
        <Grid container  alignItems="flex-end">
                <Grid container>
                    <Grid item><TextField
                    id="weight"
                    label="Weight"
                    defaultValue={weight}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    onChange={event=>this.updateInput({weight:event.target.value})}
                /></Grid>
                    <Grid item><TextField
                    id="rep"
                    label="Rep"
                    defaultValue={rep}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    onChange={event=>this.updateInput({rep:event.target.value})}
                /></Grid>
                </Grid>
                <Grid container>
                    <Grid item><TextField
                    id="newWeight"
                    label="New Weight"
                    defaultValue={nextWeight}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    onChange={event=>this.updateInput({nextWeight:event.target.value})}
                /></Grid>
                    <Grid item><TextField
                    id="nextRep"
                    label="New Rep"
                    value={nextRep.toFixed(1)}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                /></Grid>
                </Grid>
        </Grid>
    </Paper>
  );
}
}

const mapStateToProps = state => {
    console.log("mapStateToProps");
    console.log(state);
    return state;    
};
export default connect(
    mapStateToProps,
    {onNumChange}
)(Calc);