import chat from '../../assets/icon-chat.webp'
import money from '../../assets/icon-money.webp'
import security from '../../assets/icon-security.webp'
import './TableFeatures.scss'

function TableFeatures(props) {
    let imgLink=''
    switch(props.info.img) {
        case 'icon-money': imgLink = money; break
        case 'icon-chat': imgLink = chat; break
        case 'icon-security': imgLink = security; break
    }

    return <div className='feature'>
        <img src={imgLink} alt={props.info.img} className='feature__icon' />
        <h3 className='feature__title' > {props.info.title} </h3>
        <p> {props.info.text} </p>
    </div>
}

export default TableFeatures