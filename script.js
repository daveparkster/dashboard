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
      pointBackgroundColor: "#D3D3D3",
    },
  ],
}; 

const config = {
  type: 'line',
  data: data,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    raidus: 2, 
    hitRadius: 10, 
    hoverRadius: 2, 
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

/*placeholder chart(up)*/

const ctx2 = document.getElementById('myChart2').getContext("2d");

let delayed2;

let gradient2 = ctx2.createLinearGradient(0, 0, 0, 240);
gradient2.addColorStop(0,"rgba(144,238,144)");
gradient2.addColorStop(1,"rgba(255,255,255)");

const labels2 = [
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

const data2 = {
  labels,
  datasets: [
    {
      borderWidth: 2,
      tension: 0.10,
      data: [46.3, 46.4, 46.32, 46.37, 46.4, 46.5, 46.4, 46.42, 46.5],
      label: true,
      fill: true,
      backgroundColor: gradient2,
      borderColor: "rgba(37,202,37)",
    },
  ],
};

const config2 = {
  type: 'line',
  data: data2,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      },
    },
    hitRadius: 0, /*remove hover effect*/
    hoverRadius: false, 
    responsive: true, 
    maintainAspectRatio: false, 
    animation: {
      onComplete: () => {
        delayed2 = true;
      }, 
      delay:(context) => {
        let delay = 0;
        if(context.type === "data" && context.mode === 'default' && !delayed2) {
          delay = context.dataIndex * 250 + context.datasetIndex * 100;
        }
        return delay;
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
          ticks: {
           display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            lineWidth: 0.5,
          },
      },
    },
  },
};

const myChart2 = new Chart(ctx2, config2);

const ctx3 = document.getElementById('myChart3').getContext("2d");
const data3 = {
  labels,
  datasets: [
    {
      borderWidth: 2,
      tension: 0.10,
      data: [46.3, 46.4, 46.5, 46.37, 46.4, 46.5, 46.4, 46.5, 46.7],
      label: false,
      fill: true,
      backgroundColor: gradient2,
      borderColor: "rgba(37,202,37)",
    },
  ],
};

const config3 = {
  type: 'line',
  data: data3,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      },
    },
    hitRadius: 0, /*remove hover effect*/
    hoverRadius: false, 
    responsive: true, 
    maintainAspectRatio: false, 
    animation: {
      onComplete: () => {
        delayed2 = true;
      }, 
      delay:(context) => {
        let delay = 0;
        if(context.type === "data" && context.mode === 'default' && !delayed2) {
          delay = context.dataIndex * 250 + context.datasetIndex * 100;
        }
        return delay;
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
          ticks: {
           display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            lineWidth: 0.5,
          },
      },
    },
  },
};

const myChart3 = new Chart(ctx3, config3);

const ctx4 = document.getElementById('myChart4').getContext("2d");

const data4 = {
  labels,
  datasets: [
    {
      borderWidth: 2,
      tension: 0.10,
      data: [3.90, 3.70, 3.43, 3.55, 3.54, 3.55, 3.58, 3.82, 3.98],
      label: false,
      fill: true,
      backgroundColor: gradient2,
      borderColor: "rgba(37,202,37)",
    },
  ],
};

const config4 = {
  type: 'line',
  data: data4,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      },
    },
    hitRadius: 0, /*remove hover effect*/
    hoverRadius: false, 
    responsive: true, 
    maintainAspectRatio: false, 
    animation: {
      onComplete: () => {
        delayed2 = true;
      }, 
      delay:(context) => {
        let delay = 0;
        if(context.type === "data" && context.mode === 'default' && !delayed2) {
          delay = context.dataIndex * 250 + context.datasetIndex * 100;
        }
        return delay;
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
          ticks: {
           display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            lineWidth: 0.5,
          },
      },
    },
  },
};

const myChart4 = new Chart(ctx4, config4);

const ctx5 = document.getElementById('myChart5').getContext('2d'); 

let gradient5 = ctx5.createLinearGradient(0, 0, 0, 240);
gradient5.addColorStop(0,"rgba(255,219,224)");
gradient5.addColorStop(1,"rgba(255,255,255)");

const data5 = {
  labels,
  datasets: [
    {
      borderWidth: 2,
      tension: 0.10,
      data: [3.94, 3.96, 3.90, 3.92, 3.62, 3.61, 3.58, 3.72, 3.60],
      label: false,
      fill: true,
      backgroundColor: gradient5,
      borderColor: "rgba(247,129,149)",
    },
  ],
};

const config5 = {
  type: 'line',
  data: data5,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0
      },
    },
    hitRadius: 0, /*remove hover effect*/
    hoverRadius: false, 
    responsive: true, 
    maintainAspectRatio: false, 
    animation: {
      onComplete: () => {
        delayed2 = true;
      }, 
      delay:(context) => {
        let delay = 0;
        if(context.type === "data" && context.mode === 'default' && !delayed2) {
          delay = context.dataIndex * 250 + context.datasetIndex * 100;
        }
        return delay;
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
          ticks: {
           display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            lineWidth: 0.5,
          },
      },
    },
  },
};

const myChart5 = new Chart(ctx5, config5);