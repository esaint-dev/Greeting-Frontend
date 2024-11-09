import GreetingForm from './components/greetingForm';
import UserCard from './components/UserCard';


function App() {

  const user = {
    name: 'Esaint Mjay',
    email: 'esaint.song@gmail.com',
  };

  return (
    <>
    <div className='flex  justify-around items-center min-h-screen'>
      <UserCard name={user.name} email={user.email} />
      <GreetingForm />
    </div>
        
    </>
  )
}

export default App
