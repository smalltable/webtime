console.log("Hello");

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        datasets: [{
            backgroundColor: ["blue", "yellow", "red"],
            data: [10, 20, 30],
        }]
    },

    // Configuration options go here
    options: {}
});


// Pretty much pseudocode for concept.

var labels = [];
var data = [];

for (item in array) {
  chrome.storage.local.get(['name'], function(result)) {
    labels.push(result);
  });
  chrome.storage.local.get(['time'], function(result)) {
    data.push(result);
  });
}
