// const closeBtn = document.getElementById('close-btn');
new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColors: ['#198d19'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2018', value: 20 },
        { year: '2019', value: 10 },
        { year: '2020', value: 25 },
        { year: '2021', value: 5 },
        { year: '2022', value: 30 },
        { year: '2023', value: 20 },
        { year: '2024', value: 40 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });

  Morris.Donut({
    element: 'donut-example',
    data: [
        {label: "Junio", value: 32},
        {label: "Julio", value: 12},
        {label: "Agosto", value: 19},
    ],
    colors: ['#0072f2', 'red', '#ffbc01'],
    labelColor: '#ffffff'
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});


  