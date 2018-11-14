import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class List extends Component{
    
    render () {

        if(this.props.error){
            return <h1 className="center red-text">{this.props.error}</h1>;
        }

        const listElements = this.props.data.map((item,index) => {
            console.log("List Item: ",item)
            return (
                    <li className = "collection-item row" key={item._id}>
                        <div className="col s8">
                            <Link to = {`/item/${item._id}`}>{item.title}</Link>
                        </div>
                        <div className="col s4 right-align">
                            <button onClick = {(event) => { this.props.delete(item._id) }} className = "btn red lighten-2">Delete</button>
                        </div>
                    </li>
                );
        });
        return (
            <div>
                <h1 className = 'center'>To Do List</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to = '/add-item' className = 'btn blue lighten-2'>Add Item</Link>
                    </div>
                </div>
                <ul className = "collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}


export default List;