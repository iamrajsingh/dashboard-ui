import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [invites, setInvites] = useState(2);
  const [duration, setDuration] = useState(15);
  const [totalCost, setTotalCost] = useState(0);

  const cost = () => {
    var val = invites * duration;
    setTotalCost(val)
  }

  useEffect(()=> {
   const calc = cost()

  },[invites, duration])

  const data = {
    labels: ["Invite", "Duration"],
    datasets: [
      {
        labels: "Event",
        data: [invites, duration],
        backgroundColor: [" #36d399", "#641ae6"],
        borderColor: ["#fff", "#fff"],
      },
    ],
  };

  const options = {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span>Invites: {invites}</span>
        <input
          type="range"
          min= "1"
          max="10"
          value= {invites}
          onChange={(e) => setInvites(e.target.value)}
          className="range range-success"
          step="1"
        />
        <br />
        <span>Duration: {duration}mins</span>
        <input
          type="range"
          min= "10"
          max="60"
          value= {duration}
          onChange={(e) => setDuration(e.target.value)}
          className="range range-primary"
        />
      </div>

      <div className="w-[400px] h-[200px] flex flex-row">
        <Doughnut data={data} options={options} />
        <p className="text-xl font-montserrat text-black h-full flex items-center">Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
