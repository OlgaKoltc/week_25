import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Nutrient", "Quantity (grams per 1 kg of body weight)"],
  ["Protein 25-30%", 1.3],
  ["Carbs 30-50%", 2.4],
  ["Fat 25-30%", 1.2],
];

export const options = {
  title: "The Ratio of Carbs, Protein & Fat",
};


function App() {
  return (
    <div className="App">
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
