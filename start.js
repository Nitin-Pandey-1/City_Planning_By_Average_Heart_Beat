var res = 0 , future_population =0 , decades =0 , per_avg =0 ,del_avg =0 , avg=0;
function form11(){
    const hr1 = document.getElementById('number1');
    const hr2 = document.getElementById('number2');
    const hr3 = document.getElementById('number3');
    var h1 = parseInt(hr1.value);
    var h2 = parseInt(hr2.value);
    var h3 = parseInt(hr3.value);
    avg = (h1+h2+h3)/3;
    //Normal HeartBeat is 80 beats/min
    del_avg = (avg - 80);
    per_avg = (del_avg/80)*100;

    //Normal life expectancy is 70.8 years in INDIA

    decades = (70.8) + ((per_avg/100)*70.8);

    res = parseInt(decades/10);
    console.log('res');

    if(res>10){
        res  = 10;
    }

    alert("Number of decades to be taken is : "+ res);
}
// getting the element's value
let whole_arr = [];
var arr=[];

var diff_arr = [];
var sum1=0,sum2 = 0 , sum3=0;
var x = 0;
var res2 = 0;
var h11;
var test=0;
function form12(){
    const form2 = document.getElementById('forms2');
    

    const hc1 = document.getElementById('1');
    const hc2 = document.getElementById('2');
    const hc3 = document.getElementById('3');
    const hc4 = document.getElementById('4');
    const hc5 = document.getElementById('5');
    const hc6 = document.getElementById('6');
    const hc7 = document.getElementById('7');
    const hc8 = document.getElementById('8');
    const hc9 = document.getElementById('9');
    const hc10 = document.getElementById('10');

    let g1 = parseInt(hc1.value);
    let g2 = parseInt(hc2.value);
    let g3 = parseInt(hc3.value);
    let g4 = parseInt(hc4.value);
    let g5 = parseInt(hc5.value);
    let g6 = parseInt(hc6.value);
    let g7 = parseInt(hc7.value);
    let g8 = parseInt(hc8.value);
    let g9 = parseInt(hc9.value);
    let g10 = parseInt(hc10.value);

    whole_arr = [g10,g9,g8,g7,g6,g5,g4,g3,g2,g1];

    for(var i=0;i<res;i++){
        arr.push(whole_arr[i]);
    }

    var hr11 = document.querySelector('input[name = "Older"]:checked').value;

    
    for(var i=0;i<res-1;i++){
        diff_arr.push(arr[i]-arr[i+1]);
    }
    for(var j=0;j<diff_arr.length;j++){
        sum1+=diff_arr[j];
    }
    x = sum1/diff_arr.length;
    for(var j=0;j<diff_arr.length;j++){
        sum2*=((diff_arr[j]/arr[j+1])*100);
    }
    var r = Math.pow(sum2, (1/(res-1)));
    var d_diff = [];
    for(var i=0;i<diff_arr.length-1;i++){
        d_diff.push(diff_arr[i]-diff_arr[i+1]);
    }
    for(var j=0;j<d_diff.length;j++){
        sum3+=d_diff[j];
    }
    var y = sum3/d_diff.length;
    if(hr11 == "1"){
        res2 = arr[0] + 1*x;
        test =1;
    }

    else if(hr11 == "2"){
        res2 = arr[0]*(1+(r/100));
        test=2;
    }

    else{
        res2 = arr[0]+x+y;
        test=3;
    }

    future_population = parseInt(res2);

    console.log(future_population);
    alert("future population is : " + future_population);
}
var water_demand = 0;
var number_of_treatment_plants =0;
function form13(){
    const form3 = document.getElementById('form3');
    var hg1 = document.querySelector('input[name = "Urban"]:checked').value;
    const hg2 = document.getElementById('number');
    let hh2 = parseInt(hg2.value);

    hh2 = parseInt(hh2);


    if(hg1 == "1"){
        water_demand = 135*future_population;
    }
    else{
        water_demand = 55*future_population;
    }

    number_of_treatment_plants = parseInt(water_demand/hh2);
    alert("Water_demand is : "+water_demand+"\n"+"Number of treatment plants is : "+number_of_treatment_plants);
}

function oc(){
    document.getElementById("f").innerHTML = future_population;
    document.getElementById("w").innerHTML = water_demand;
    document.getElementById("wtp").innerHTML = number_of_treatment_plants;
}



