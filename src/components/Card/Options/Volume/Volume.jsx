import s from './Volume.module.css'

export default function Volume({id}) {
    return (
        <ul className={s.volumeList}>
                    <li>  
                        <label htmlFor={`${id}-100`}>
                            <input type="radio" id={`${id}-100`} name={`volume${id}`} value="100" className={s.radioInput} defaultChecked/>
                            <span className={s.checkBox}></span>
                            100 мл
                        </label>
                    </li>
                    <li>
                        <label htmlFor={`${id}-200`}>
                            <input type="radio" id={`${id}-200`} name={`volume${id}`} value="200" className={s.radioInput} />
                            <span className={s.checkBox}></span>
                            200 мл
                        </label>
                    </li>
                    <li>
                        <label htmlFor={`${id}-300`}>
                            <input type="radio" id={`${id}-300`} name={`volume${id}`} value="300" className={s.radioInput} />
                            <span className={s.checkBox}></span>
                            300 мл
                        </label>
                    </li>
                </ul>
    )
}