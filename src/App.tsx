/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black" id="app-root">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
