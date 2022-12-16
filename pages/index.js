import Head from 'next/head';
import Link from 'next/link';
import CostOfLivingCalculator from './CostOfLivingCalculator';
import CostOfLivingForm from '../components/costOfLivingForm';

const Home = () => (
  <div>
    {/* <CostOfLivingCalculator/> */}
    <CostOfLivingForm/>
  </div>
);

export default Home;
