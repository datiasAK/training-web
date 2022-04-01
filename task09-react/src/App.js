import Footer from './components/Footer';
import skull from './assets/img/op-skull.svg'
import Header from './components/Header';
import Synopsis from './components/Synopsis';

function App() {
  return (
    <>
      <Header />
      <Synopsis/>
      <Footer 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit at vel congue scelerisque tortor tortor."
        img={{src: skull, alt: "one piece skull"}} 
      />
    </>
  );
}

export default App;
