
import dataProfile from './data/dataProfile.json'
import dataStatistics from './data/dataStatistics.json'
import dataFriends from './data/dataFriends.json'
import dataTransactions from './data/dataTransactions.json'

import {Profile} from "./Component/Profile/Profile";
import {RowContainer} from "./Component/RowContainer";
import {Statistics} from "./Component/Statistic/Statistics";
import {CardWrapper} from "./assets/CardWrapper/CardWrapper";
import {Friends} from "./Component/Friends/Friends";
import {Transactions} from "./Component/Transactions/Transactions";



function App() {

  return (
      <>
        <RowContainer>
            <CardWrapper row={4}>
                <Profile data={dataProfile}/>
            </CardWrapper>
            <CardWrapper row={4}>
               <Statistics data={dataStatistics}/>
            </CardWrapper>
            <CardWrapper row={4}>
                <Friends data={dataFriends}/>
            </CardWrapper>
        </RowContainer>

        <RowContainer>
                <Transactions data={dataTransactions}/>
        </RowContainer>



      </>
  );
}

export default App;
