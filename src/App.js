
import './App.css';
import Header from './components/header/header.js';
// import ListItem from './components/main_page_info.js';
// import {mainPageInfo} from './content/data_list.js';
import ShopItems from './components/shopthsitems/shopthsitems.js'
import AbsorbThisItem from './components/abscontent/abscontent.js'

function App() {
  return (
    
    <div class='HomePageStyles'>
  
      <Header />
      <div class='ShopItemStyle'><ShopItems /></div>
       <AbsorbThisItem/>
      
    </div>
  );
}

export default App;
