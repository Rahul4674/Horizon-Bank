import { HeaderBox } from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

export const Home = () => {
  const loggedInUser = { firstName : 'Rahul', lastName : 'Choudhary' , email: 'rahul.choudhary4674@gmail.com'};
  const banks=[ { name : 'PNB' , currentBalance : 1220}, { name : 'PNB' , currentBalance : 1220}];
  return (
    <section className='home'> 
        <div className='home-content'>
           <header className='home-header'>
                <HeaderBox
                  type='greeting'
                  title='Welcome'
                  user={loggedInUser?.firstName || 'Guest'}
                  subtext='Access and manage your account  and transaction efficiently.'
                />

                <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.5}
                />
               
           </header>
           RECENT Transction
        </div>
        <RightSidebar user={loggedInUser} 
          transcations={[]} 
          banks={banks}
        />
    </section>
  )
}

export default Home;
