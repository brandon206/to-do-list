import React, {Component} from 'react';
// import Fragment from 'react';

class AddItem extends Component{
    state = {
        title: '',
        details: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
       
        this.props.add(this.state);

        this.setState ({
            title: '',
            details: ''
        });
    }

    render () {
        return(
                <form onSubmit = {this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input 
                                type="text" 
                                value = {this.state.title}
                                onChange = {(event) => { this.setState ({title: event.target.value}) }}
                            />
                            <label>Title</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8 offset-s2">
                            <input
                                type="text" 
                                value = {this.state.details}
                                onChange = {(event) => {this.setState ({details: event.target.value}) }}
                            />
                            <label>Details</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s8 offset-s2 right-align">
                            <button className = 'btn blue lighten-2'>Add Item</button>
                        </div>
                    </div>
                </form>
        );
    } 
}

export default AddItem;