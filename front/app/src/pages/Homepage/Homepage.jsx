import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Banner from '../../components/Banner/Banner'
import { chat, money, security } from '../../assets/List'
import TableFeatures from '../../components/tableFeatures/TableFeatures'
import Footer from '../../components/Footer/Footer'
import './Homepage.scss'




function Homepage() {

    const column = [
        chat,
        money,
        security
    ]

    return <>
        <HeaderNav />
        <Banner />
        <section className='features'>
            <h2 className='sr-only'>Features</h2>
            {
                column.map(
                    (item, index) => <TableFeatures key={index} info={item} />
                )
            }
        </section>
        <Footer />
    </>
}

export default Homepage