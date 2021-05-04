import { Component } from 'react';
import Volume from './Volume/Volume'
import Select from './Select/Select'
import s from './Options.module.css';

export default class Options extends Component {
    state = {
        counterValue: 1,
        prise: 200,
    }

    handleIncrement = () => {
    this.setState({counterValue: this.state.counterValue + 1})
    }

    totalPrise = () => {
        const totalPrise = this.state.prise * this.state.counterValue;
        return totalPrise
    }

    handleDecrement = () => {
        if (this.state.counterValue === 1) {
            return
        }
        this.setState({counterValue: this.state.counterValue - 1})
    }

    render() {
        const { id } = this.props;
        const { counterValue } = this.state;
        return (
            <div>
                <div className={s.priseContainer}>
                   <Select/>
                    <p>{this.totalPrise()} грн</p>
                </div>
                 <Volume id={ id}/>
                <div className={s.buyContainer}>
                    <div className={s.counter}>
                        <button type='button' className={s.decrement} onClick={this.handleDecrement}>-</button>
                        <span>{counterValue}</span>
                        <button type='button' className={s.increment} onClick={this.handleIncrement}>+</button>
                    </div>
                    <button type='button' className={s.buyBtn}>купить</button>
                </div>
            </div>
        )
    }
  
}