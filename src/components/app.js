import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css';
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
import { randomString } from '../helpers'; 
//when your file is called 'index' you don't need to specify anything

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=brandoniscoding';


class App extends Component{
    constructor (props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }
    }

    deleteItem = async (id) => {
        console.log('Delete item with ID', id);
        
        // http://api.reactprototypes.com/todos/5be4a7b6d2af63260da32ac2?key=brandoniscoding
        await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }

    addItem = async (item) => {
        await axios.post(BASE_URL+API_KEY, item);

        this.getListData();
    }
    
    componentDidMount () {
        this.getListData();
    }

    // getListData () {
    //     http://api.reactprototypes.com/todos?key=c718_demouser
        
    //     TRADITIONAL AXIOS PROMISES
    //     axios.get(BASE_URL + API_KEY).then( (resp) => {
    //         console.log('Server resp:', resp);

    //         this.setState ({
    //             list: resp.data.todos
    //         });
    //     }).catch( (err) => {
    //         console.log('Request Error:', err.message);
    //         this.setState ({
    //             error: 'Error getting todos'
    //         });
    //     });
    // }

    //ASYNC AWAIT
    async getListData () {
        
        try {
            const resp = await axios.get(BASE_URL + API_KEY);
            this.setState ({
                list: resp.data.todos
            }); 
        } catch (err) {
            this.setState({
                error: 'Error getting todos'
            });
        }
        
    }

    render () {
        const {error} = this.state;

        return(
            <div className = "container">
                <h1 className = "center">To Do List</h1>
                <AddItem add = {this.addItem}/>

                {
                    error 
                        ? <h1 className = 'center red-text'>{error}</h1> 
                        : <List delete = {this.deleteItem} data = {this.state.list}/>
                }

            </div>
        );
    }
}

export default App;
