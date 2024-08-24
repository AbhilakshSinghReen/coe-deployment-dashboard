import Orders from '../../Components/orders/orders';
import { cardsData } from '../../data';
import css from './Dashboard.module.css';
// import Statstics from './Statstics/Statstics';
const Dashboard = () => {
  return (
   <div className={css.container}>
    

    {/* left pannel */}
    <div className={css.dashboard}>
      <div className={'${css.dashboardHead} theme-container'}>

        <div className={css.head}>
          {/* <div className={css.durationButton}></div> */}
          <span>CoE Mammography Dashboard</span>
        
        </div>
        <div className={css.cards}>
          {
            cardsData.map((card, index)=>(
              <div className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>{(card.amount)}</span>
                </div>
              </div>
            ))
          }
        </div>

      </div>
  
    </div>

{/* 
  <Orders/> */}
  
 
   </div>
  )
}

export default Dashboard
