import { useNavigate } from "react-router-dom"

function Btn (infoBtn) {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(infoBtn.props.link)
    }

    return <button className={infoBtn.props.classname} onClick={onClick}>{infoBtn.props.label}</button>
}

export default Btn