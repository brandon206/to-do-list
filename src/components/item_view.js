import React, {Component} from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../helpers/common';

class ItemView extends Component {
    async componentDidMount ( ){
        console.log("item props: ",this.props.match.params.item_id);
        const resp = await axios.get (`${BASE_URL}/${this.props.match.params.item_id + API_KEY}`);

        console.log('item response: ', resp);
    }
    render () {
        return (
            <div>
                <h1 className="center">View To Do Item</h1>
            </div>
        );
    }
}

export default ItemView;