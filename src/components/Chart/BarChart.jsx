import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(ChartDataLabels)

const data = {
  labels: ['Red', 'Orange', 'Blue', 'Blue', 'Blue'],
  datasets: [
    {
      label: 'Expenses',
      data: [555, 2000, 1000, 1500, 400],
      backgroundColor: [
        "#FF751D",
        "#FFDAC0",
        "#FF751D",
        "#FF751D",
        "#FFDAC0",
        "#FF751D",
      ],
      borderRadius: 10,
      barThickness: 38
    }
  ]
}

const BarChart = () => {
  return (
    <div className="chart-container">
      <Bar
        data={data}
        options={{
          layout: {
            padding: 100
          },
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
    </div>
  );
};

export default BarChart;