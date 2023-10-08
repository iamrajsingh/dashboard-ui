import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { AiFillCaretDown } from "react-icons/ai";
import Info from "../components/Info";

const graphOptions = [
  {
    name: "New signups",
    active:
      "font-bold text-black underline underline-offset-8 decoration-secondary",
  },
  {
    name: "Revenue",
    active: "text-slate-500",
  },
  {
    name: "Product",
    active: "text-slate-500",
  },
  {
    name: "Sales",
    active: "text-slate-500",
  },
  {
    name: "Active learners",
    active: "text-slate-500",
  },
];

const Graph = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  const initialXData = [
    "2021-02-03",
    "2021-02-04",
    "2021-02-05",
    "2021-02-06",
    "2021-02-07",
    "2021-02-08",
    "2021-02-09",
  ];
  const initialYData = [0, 0, 0, 0, 0, 0, 1];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const newChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: initialXData,
        datasets: [
          {
            label: "New users",
            data: initialYData,
            borderColor: "#55ccc2",
            borderWidth: 2,
            display: false,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
            ticks: {
              stepSize: 0.25,
            },
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    setChart(newChart);
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <section className="flex flex-row w-full h-max mt-1 bg-white shadow-sm p-2">
      <div className="flex flex-col w-[70%] pt-2">
        <div className="flex w-full justify-between items-center mb-5">
          <p className="flex items-center pl-2 text-md text-slate-500 font-bold">
            <SlCalender className="h-[25px] w-[40px] text-secondary" />
            Your school
          </p>
          <ul className="flex flex-row items-center">
            {graphOptions.map((item) => (
              <li
                key={item.name}
                className={`text-md pr-5 font-montserrat ${item.active}`}
              >
                <a href="#">{item.name}</a>
              </li>
            ))}
            <li className="bg-[#ebebeb] py-1 px-3 rounded-3xl font-montserrat flex items-center">
              <a href="#" className="text-md pr-2">
                Last 7 days
              </a>
              <a href="#">
                <AiFillCaretDown />
              </a>
            </li>
          </ul>
        </div>
        <canvas ref={chartRef} height={300} width={1200} />
      </div>
      <Info />
    </section>
  );
};

export default Graph;
