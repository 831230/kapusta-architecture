import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { expenseStats } from '../../redux/fakeDb'
// import useWindowDimensions from "../../hooks/useWindowDimensions";

//CSS 
import css from "./BarChart.module.css"

Chart.register(ChartDataLabels)


const { innerWidth: width } = window;
console.log(width)
const test = expenseStats.userExpenses;

const widthBar = width < 576 ? 15 : 38;

const data = {
  labels: test.map(e => e.category),
  datasets: [
    {
      label: 'Expenses',
      data: test.map(e => e.amount).sort((a, b) => b - a),
      backgroundColor: [
        "#FF751D",
        "#FFDAC0",
        "#FF751D",
        "#FF751D",
        "#FFDAC0",
        "#FF751D",
        "#FF751D",
      ],
      borderRadius: 10,
      barThickness: widthBar,
      barPercentage: 0.5,
    }
  ]
}
const barOptionsPhone = {
  categoryPercentage: 0.5,
  indexAxis: 'y',
  layout: {
    padding: {
      top: 20,
      bottom: 10,
      left: 5,
      right: 20,
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      color: '#52555F',
      offset: 5,
    },

  },
  scales: {
    y: {
      ticks: {
        labelOffset: -12,
        mirror: true,
        align: 'end',
      },
      border: { display: false },
      grid: {
        display: false,
        drawBorder: true,
      },
    },
    x: {
      display: false,
    }
  }

}
const barOptions = {

  layout: {
    padding: {
      top: 50,
      bottom: 20,
      left: 20,
      right: 30,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#52555F',
    },

  },
  scales: {
    x: {
      border: { display: false },
      grid: {
        display: false,
        drawBorder: true,
      },
    },
    y: {
      grid: {
        color: "#F5F6FB"
      },
      border: { display: false },
      ticks: {
        display: false,
      },
    }
  }

}
const BarChart = () => {
  return (
    <div className={css.ChartContainer}>
      <Bar
        data={data}
        options={width > 576 ? barOptions : barOptionsPhone}
      />
    </div>
  );
};

export default BarChart;