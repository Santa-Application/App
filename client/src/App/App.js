import { HelmetProvider } from 'react-helmet-async';

import { Routes, ScrollToTop } from 'routes';
import { Footer, Header } from 'components';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
