import './Banner.scss'

function Banner() {


    return <div className="banner">
    <section className="banner__content">
      <h2 className="sr-only">Promoted Content</h2>
      <p className="banner__content__subtitle">No fees.</p>
      <p className="banner__content__subtitle">No minimum deposit.</p>
      <p className="banner__content__subtitle">High interest rates.</p>
      <p className="banner__content__text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
}

export default Banner