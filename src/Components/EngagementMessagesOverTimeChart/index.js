import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EngagementHelper from "./EngagementHelper.utils";
import { CHANNELS, Message_COUNT_LIST } from "./EngagementHelper.constants";

const EngagementMessagesOverTime = () => {
  const options = EngagementHelper.engagementMessageOverTimeChartOptions(
    Message_COUNT_LIST,
    CHANNELS
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
