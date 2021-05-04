import { Component } from 'react';
import s from './Select.module.css'

export default class Options extends Component {
    state = {
        value: 'Цвет',
        isOpen: false
    }
    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    choseColor = (e) => {
        this.setState({value: e.target.innerText, isOpen: !this.state.isOpen})
    }
    
    render() {
        const {value, isOpen} = this.state
        return (
        <>
                <input type='button' className={isOpen ? s.containerOpen : s.container } onClick={this.handleClick} value={value}></input>
                {isOpen ? <svg width="11" height="7" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.arrow}>
                <path d="M1 4L4 1L7 4" stroke="#2C2C2C" strokeLinecap="round"/>
                </svg> :
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.arrow}>
                    <path d="M0.999817 1.00003L5.49982 6.00003L9.99982 1.00003" stroke="#2C2C2C"/>
                    </svg>}
                {isOpen &&
                    <div className={s.backdrop} onMouseLeave={this.handleClick}>
                        <ul className={s.colorList}>
                            <li onClick={this.choseColor}>Желтый</li>
                            <li onClick={this.choseColor}>Красный</li>
                            <li onClick={this.choseColor}>Зеленый</li>
                            <li onClick={this.choseColor}>Желтый</li>
                            <li onClick={this.choseColor}>Красный</li>
                            <li onClick={this.choseColor}>Зеленый</li>
                        </ul>
                    </div>
                }
        </>
     )
 }
 }
