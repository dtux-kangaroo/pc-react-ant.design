import React from "react";
import 'echarts/lib/chart/line'
import "echarts/lib/chart/bar";

import Chart from "./common";

export default class DoubleChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { config, option } = this.props
    return <Chart
      config={config}
      option={option}
    />
  }
}
