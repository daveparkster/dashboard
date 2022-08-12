const ctx = document.getElementById('myChart').getContext("2d"); //3d

let delayed; 

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0,"rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255, 0.3)"); 

const labels = [
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm", 
]; 

const data = {
  labels,
  datasets: [
    {
      borderWidth: 1.5,
      data: [48.3, 47.9, 46.5, 46.9, 47.6, 47.44, 46.4, 46.4, 47.4],
      label: "PPI-USD",
      fill: true,
      backgroundColor: gradient,
      borderColor: "#fff",
      pointBackgroundColor: "rgb(189, 195, 199)",
    },
  ],
}; 

const config = {
  type: 'line',
  data: data,
  options: {
    raidus: 5, 
    hitRadius: 20, 
    hoverRadius: 5, 
    responsive: true, 
    maintainAspectRatio: false, 
    animation: {
      onComplete: () => {
        delayed = true;
      }, 
      delay:(context) => {
        let delay = 0;
        if(context.type === "data" && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 250 + context.datasetIndex * 100;
        }
        return delay;
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
          ticks: {
            callback: function (value) {
              return '$' + value + "k"; 
            },
          },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
