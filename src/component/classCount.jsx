import React, {useState} from "react";
import styles from '../styles.scss'

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
            count: 0
            }
            this.increment = this.increment.bind(this)
            this.decrement = this.decrement.bind(this)
    }

    increment() {
       this.setState({count: this.state.count + 1})
    }
    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className={styles.ad}>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>{this.props.post}</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )

    }
}

export default ClassCounter;