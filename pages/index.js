import { LineChart, Line } from "recharts";

// This is the page that will be rendered at the root of your site.

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page A", uv: 300, pv: 2000, amt: 10000 },
];
export default function Home() {
  return (
    <main>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </main>
  );
}
