import "./index.css";
import "./App.css";
import { Header, Container, Footer, Hero, Feature, Video ,Facts, Deal, Properties, Contact } from "./components/index";


const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Feature />
        <Video />
        <Facts/>
        <Deal/>
        <Properties/>
        <Contact/>
      </Container>
      <Footer />
    </>
  );
};
export default App;
