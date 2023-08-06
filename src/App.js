import React from "react";
import EngagementMessagesOverTimeChart from "./Components/EngagementMessagesOverTimeChart";
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.app}>
      <EngagementMessagesOverTimeChart />
    </div>
  );
}

export default App;
