

// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["English", "Hindi", "Cantonese", "Python","HTML/CSS"],
      datasets: [
        {
          label: "Level (out of 10)",
          backgroundColor: ["#809fff","#809fff","#809fff","#bfcfff","#bfcfff"],
          data: [10,8,4,5,2]
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
        text: "Human & Machine Languages",
        padding:25
      }
    }
});
