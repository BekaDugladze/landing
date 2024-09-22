import { Header } from './components/header/header';
import { First } from './components/first/first';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

export default function Home() {
  return (
    <div>
      <Header />
      <First />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}