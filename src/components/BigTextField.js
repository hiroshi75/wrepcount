
import React from 'react';
import TextField from '@material-ui/core/TextField';

const styles = {
    labelStyle:{
        fontSize: 25,
    },
    inputStyle:{
        fontSize: 30,
        width: 180
    }
};

class BigTextField extends React.Component {

    focusTextInput(event) {
        event.target.select();
    }

    render(){
        return <TextField {...this.props}
        inputRef={this.textInput}
        
        type="number"
        InputLabelProps={{
            shrink: true,
            style: styles.labelStyle
        }}
        InputProps={{
            style: styles.inputStyle
        }}
        margin="normal"
        onFocus={this.focusTextInput}
        />
    };
}

export default BigTextField;
