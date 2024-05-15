import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { ChartContainer } from "./BarChart.styles"
import { expenseStats } from '../../redux/fakeDb'

Chart.register(ChartDataLabels)
const test = expenseStats.userExpenses;


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
      barThickness: 38
    }
  ]
}

const BarChart = () => {
  return (
    <ChartContainer>
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
        }
      />
    </ChartContainer>
  );
};

export default BarChart;