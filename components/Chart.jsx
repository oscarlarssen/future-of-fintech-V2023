import styles from "./Chart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";

const data = [
  {
    from: "2022-12-06T10:00:00.000+01:00",
    to: "2022-12-06T11:00:00.000+01:00",
    consumption: 0.575,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T11:00:00.000+01:00",
    to: "2022-12-06T12:00:00.000+01:00",
    consumption: 0.072,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T12:00:00.000+01:00",
    to: "2022-12-06T13:00:00.000+01:00",
    consumption: 0.06,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T13:00:00.000+01:00",
    to: "2022-12-06T14:00:00.000+01:00",
    consumption: 0.116,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T14:00:00.000+01:00",
    to: "2022-12-06T15:00:00.000+01:00",
    consumption: 1.753,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T15:00:00.000+01:00",
    to: "2022-12-06T16:00:00.000+01:00",
    consumption: 2.234,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T16:00:00.000+01:00",
    to: "2022-12-06T17:00:00.000+01:00",
    consumption: 1.572,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T17:00:00.000+01:00",
    to: "2022-12-06T18:00:00.000+01:00",
    consumption: 1.488,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T18:00:00.000+01:00",
    to: "2022-12-06T19:00:00.000+01:00",
    consumption: 1.957,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T19:00:00.000+01:00",
    to: "2022-12-06T20:00:00.000+01:00",
    consumption: 0.852,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T20:00:00.000+01:00",
    to: "2022-12-06T21:00:00.000+01:00",
    consumption: 1.591,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T21:00:00.000+01:00",
    to: "2022-12-06T22:00:00.000+01:00",
    consumption: 1.601,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T22:00:00.000+01:00",
    to: "2022-12-06T23:00:00.000+01:00",
    consumption: 0.44,
    consumptionUnit: "kWh",
  },
  {
    from: "2022-12-06T23:00:00.000+01:00",
    to: "2022-12-07T00:00:00.000+01:00",
    consumption: 0.284,
    consumptionUnit: "kWh",
  },
];

const convertedData = data.map((item) => {
  // convert from and to, to hours
  item.from = new Date(item.from).getHours();
  item.to = new Date(item.to).getHours();
  return {
    period: `${item.from} - ${item.to}`,
    consumption: item.consumption,
    consumptionUnit: item.consumptionUnit,
  };
});

export default function Chart() {
  return (
    <div className={styles.container}>
      <LineChart id="123" width={400} height={400} data={convertedData}>
        <XAxis dataKey="period">
          <Label value="Period" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Consumption (KWh)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
