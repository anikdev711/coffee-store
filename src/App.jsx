import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  // console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>

      <h1 className='text-6xl text-purple-600 text-center mb-24 mt-10'>Hot and Cold coffees: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {
          coffees?.map(coffee => <CoffeeCard key={coffee._id} 
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>


    </>
  )
}

export default App
