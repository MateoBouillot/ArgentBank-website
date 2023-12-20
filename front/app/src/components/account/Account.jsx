import './Account.scss'
import Btn from '../btn/Btn'


function Account (info) {
    const infoBtn = {
        label: 'View transactions',
        classname: 'btn__transaction',
        link: '/User'
    }

    return <section className="account">
    <div className="account__content">
      <h3 className="account__content__title">{info.info.title}</h3>
      <p className="account__content__amount">{info.info.amount}</p>
      <p className="account__content__description">{info.info.description}</p>
    </div>
    <div className="account__content btn">
      <Btn props={infoBtn} />
    </div>
  </section>
}

export default Account