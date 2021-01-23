

// Bar chart
new Chart(document.getElementById("bar-chart2"), {
    type: 'bar',
    data: {
      labels: ["Graphic Design", "Video Editing", "Event Planning", "Leadership", "Capacity to Learn"],
      datasets: [
        {
          label: "Level (out of 10)",
          backgroundColor: ["#809fff","#809fff","#809fff","#809fff","#809fff"],
          data: [5,6,8,8,9]
        }
      ]
    },
    options: {
      scales:{yAxes:[{ticks:{fontColor:"white",min:0,max:10,stepSize:1,}}],xAxes:[{ticks:{fontColor:"white",}}]},
      legend: { display: false},
      title: {
        display: true,
        fontSize:24,
        fontColor: "#ffffff",
        text: "Other Skills",
        padding:25,
      }
    }
});
