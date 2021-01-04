import React, {Component} from 'react';
import { v4 as uuidv4 } from "uuid";
import './NewTag.css';

class NewTag extends Component {
    render() {

        let tags = this.props.newTagsList.map(tag => {
            return (
                <li className = 'tag tag__square' key ={uuidv4()}> {tag}  </li>
            );
        })

        return(
            <>
            <ul className = 'tag__container'>{tags}</ul>
            <form onSubmit = {this.props.submitHandler}>
                <input 
                    className = 'tag_input'
                    placeholder= 'Add a new tag' 
                    type = 'text' 
                    onKeyDown = {this.props.onKeyDownHandler}
                    />
            </form>
            </>
            
        )
    }
};

export default NewTag;