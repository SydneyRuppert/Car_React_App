
import Background from '../assets/images/buildings.jpeg'

function About() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-white bg-opacity-50 text-black rounded'>This car Inventory was designed for the owners of dealerships so that they may keep tracking
          of the cars sold and to whom.</h3>
        </div>
    </div>
  )
}

export default About