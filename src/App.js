// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// // Import de tes pages
// import Accueil from './pages/Accueil';
// import Apropos from './pages/Apropos';
// import Equipes from './pages/Equipes';
// import Joueurs from './pages/Joueurs';
// import Entraineurs from './pages/Entraineurs';
// import Resultats from './pages/Resultats';
// import Galerie from './pages/Galerie';
// import Inscriptions from './pages/Inscriptions';
// import Contact from './pages/Contact';
// import Admin from './pages/Admin';
// // import Header from './components/Header';

// function App() {
//   return (
//     <Router>
//       {/* <Header /> */}
//       <Navbar />
//       <main style={{ minHeight: '80vh', padding: '1rem 2rem' }}>
//         <Routes>
//           <Route path="/" element={<Accueil />} />
//           <Route path="/apropos" element={<Apropos />} />
//           <Route path="/equipes" element={<Equipes />} />
//           <Route path="/joueurs" element={<Joueurs />} />
//           <Route path="/entraineurs" element={<Entraineurs />} />
//           <Route path="/resultats" element={<Resultats />} />
//           <Route path="/galerie" element={<Galerie />} />
//           <Route path="/inscriptions" element={<Inscriptions />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;










import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Equipes from './pages/Equipes';
import Joueurs from './pages/Joueurs';
import Entraineurs from './pages/Entraineurs';
import Resultats from './pages/Resultats';
import Galerie from './pages/Galerie';
import Inscriptions from './pages/Inscriptions';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '220px', width: '100%' }}>
          <main style={{ minHeight: '80vh', padding: '1rem 2rem' }}>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/equipes" element={<Equipes />} />
              <Route path="/joueurs" element={<Joueurs />} />
              <Route path="/entraineurs" element={<Entraineurs />} />
              <Route path="/resultats" element={<Resultats />} />
              <Route path="/galerie" element={<Galerie />} />
              <Route path="/inscriptions" element={<Inscriptions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

