import dynamic from "next/dynamic";
import { Header } from "../components/Header";

const Chart = dynamic(() => import("../components/Chart"), {
  ssr: false,
});

// This is the page that will be rendered at the root of your site.
export default function Home() {
  return (
    <main>
      <Header />
      <Chart />
    </main>
  );
}
