import React from 'react';
import ReactDOM from 'react-dom'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Component} from "react/lib/ReactBaseClasses";


class DialogAlert extends Component {
    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Discard"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Something went wrong, sorry for the inconvenience.
                </Dialog>
            </div>
        );
    }
}


export default function modalGeneralError(e) {
    const id = 'modal-general-error';

    if (!document.getElementById(id)) {
        const wrapper = document.createElement('div');
        wrapper.id = id;
        document.body.appendChild(wrapper)
        const element =  <MuiThemeProvider><DialogAlert></DialogAlert></MuiThemeProvider>;

        ReactDOM.render(
            element,
            document.getElementById(id)
        );

    }

    if (e) throw e;
}