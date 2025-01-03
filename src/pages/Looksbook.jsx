import '../App.css';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';
import LookBreakdown from '../components/LookBreakdown';
import styles from './CSS/Looksbook.module.css'
import ScrollToTop from '../ScrollToTop';

function Looksbook() {
  return (
    <div className="App">
      <Navbar/>
      {/* <header className="App-header">
        <div className="banner">
            <div className="banner_content">
                <div>
                    Display the chosen look
                </div>
                <div>
                    Text
                </div>
            </div>
        </div>
      </header> */}
      <main className={styles.main_main}>
        <div className={styles.main_alt}>
          <LookBreakdown/>
        </div>
        {/* <div className={styles.side}>
          <SidePanel/>
        </div> */}
        {/* <PageThingy/> */}
      </main>
      <ScrollToTop/>
    </div>
  );
}

export default Looksbook;
