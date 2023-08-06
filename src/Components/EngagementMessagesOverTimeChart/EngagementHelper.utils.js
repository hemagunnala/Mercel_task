import Highcharts from "highcharts";

class EngagementHelper {
  static engagementMessageOverTimeChartOptions(messageCountList, channels) {

    const channelsWithMultipleDates = channels.filter((channel) => {
      const channelId = channel.id;
      return messageCountList.some(
        (message) => message.channelId === channelId
      );
    });

    const seriesData = channelsWithMultipleDates.map((channel) => {
      const channelId = channel.id;
      const channelName = channel.name;

      const data = messageCountList
        .filter((message) => message.channelId === channelId)
        .map((message) => {
          const date = new Date(message.timeBucket).getTime();
          const count = parseInt(message.count, 10);
          return { x: date, y: count, date: message.timeBucket };
        });

      return {
        name: channelName,
        data: data,
      };
    });

    const options = {
      chart: {
        type: "spline",
        backgroundColor: "#22222c",
        width: 1000,
        height: 300,
      },
      title: {
        text: "",
      },
      tooltip: {
        headerFormat: '<span style="font-size: 14px; color: white; font-weight: bold">{series.name}</span><br/>',
        pointFormatter: function () {
          const date = Highcharts.dateFormat("%b %e, %Y", this.x);
          return `${this.y} message(s) on ${date}`;
        },
        backgroundColor: "black",
        style: {
          color: "#727273",
        },
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "",
        },
        dateTimeLabelFormats: {
          day: "%b %e",
        },
        labels: {
          style: {
            color: "#4d545a",
          },
        },
        lineColor: "#505055",
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          style: {
            color: "#4d545a",
          },
        },
        gridLineWidth: 0,
      },
      plotOptions: {
        spline: {
          color: "#077b7b",
        },
      },
      series: seriesData,
      legend: {
        itemStyle: {
          color: "#d0d0d3",
          width: 60,
        },
        itemMarginBottom: 4,
        backgroundColor: "#15161b",
        color: 'white',
        symbolWidth: 0,
        useHTML: true,
        labelFormatter: function () {
          return `<div style="display: flex; align-items: center;"><hr style="width: 20px; height: 0px; border: 2px solid ${this.color}; margin-right: 5px;" />${this.name}</div>`;
        },
      },
    };



    return options;
  }
}

export default EngagementHelper;
