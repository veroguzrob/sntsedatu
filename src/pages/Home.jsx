import Tittle from '../components/Tittle'
import NavBarHome from '../components/NavBarHome'
import NavBarFooter from '../components/NavBarFooter'
import { SectionReleases, SectionDirectory, SectionDocuments, SectionTransparency, SectionContact } from '../components/SectionHeadings'

const Home = () => {
  return (
    <>
      <header>
        <Tittle />
        <NavBarHome />
      </header>
      <main>
        <SectionReleases />
        <SectionDirectory />
        <SectionDocuments />
        <SectionTransparency />
        <SectionContact />
      </main>
      <footer>
        <NavBarFooter />
      </footer>

    </>
  )
}

export default Home;