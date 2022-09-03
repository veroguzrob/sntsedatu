import Tittle from '../components/Tittle'
import NavBarHome from '../components/NavBarHome'
import { SectionReleases, SectionDirectory, SectionDocuments, SectionTransparency, SectionContact } from '../components/SectionHeadings'

const Home = () => {
  return (
    <>
      <header>
        <Tittle />
        <NavBarHome />
        <SectionReleases />
        <SectionDirectory />
        <SectionDocuments />
        <SectionTransparency />
        <SectionContact />
      </header>
    </>
  )
}

export default Home;