import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import ParticleBackground from '../ParticleBackground'
import { Layout } from '../layout/Layout'
import About from './About'




const App = () => {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export default App;