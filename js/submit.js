//QuerySelector

function calculate(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
                
    let years = currentYear - yearInput.value;
    let month = currentMonth - monthInput.value * 12;
    let days = currentDay - dayInput.value;
                
    console.log(years,month,days);
                
}
function inputVal(){
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;

    if(dayInput<0 || dayInput>32 || monthInput>13 || monthInput<0|| yearInput<1900 || yearInput<0 || isNaN(dayInput)|| isNaN(monthInput)|| isNaN(yearInput)){
        document.getElementById("day").style.color= "red"
        document.getElementById("month").style.color= "red"
        document.getElementById("year").style.color= "red"
        //error = document.getElementById("error").style.
        return alert("faio");
    }
    calculate();
}
    
