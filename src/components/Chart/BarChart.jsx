import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { expenseStats } from '../../redux/fakeDb'
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
    }
  ]
}
const barOptionsPhone = {
  indexAxis: 'y',
}
const barOptions = {

  layout: {
    padding: {
      top: 50,
      bottom: 20,
      left: 10,
      right: 10,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
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
        maxTicksLimit: 10,
      },
    }
  }

}
const BarChart = () => {
  return (
    <div className={css.ChartContainer}>
      <Bar
        data={data}
        options={{
          layout: {
            padding: {
              top: 50,
              bottom: 20,
              left: 10,
              right: 10,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            datalabels: {
              anchor: 'end',
              offset: true,
              align: 'top',
              color: '#52555F',
            },

          },
          indexAxis: 'y',
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
                maxTicksLimit: 10,
              },
            }
          }
        }
        }
      />
    </div>
  );
};

export default BarChart;