import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Banner from '../../components/Banner/Banner'
import { useStore } from 'react-redux'
import TableFeatures from '../../components/tableFeatures/TableFeatures'
import Footer from '../../components/Footer/Footer'
import './Homepage.scss'



function Homepage() {

    const store = useStore()

    return <>
        <HeaderNav />
        <Banner />
        <section className='features'>
            <h2 className='sr-only'>Features</h2>
            {
                store.getState().column.map(
                    (item, index) => <TableFeatures key={index} info={item} />
                )
            }
        </section>
        <Footer />
    </>
}

export default Homepage