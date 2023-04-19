//QuerySelector

let validation = true;

function calculate(){
    const currentYear = new Date().getFullYear();
    const yearInput = Number(document.getElementById("year").value);
    parseInt(yearInput);
        
    let yearO = (currentYear) - (yearInput);
    let monthO =  (yearO * 12);
    let daysO =  (yearO * 360);
    console.log(yearO,monthO,daysO);

    let yearOut = document.getElementById("year-out");
    let monthOut = document.getElementById("month-out");
    let dayOut = document.getElementById("day-out");

    yearOut.innerHTML = yearO;
    monthOut.innerHTML = monthO;
    dayOut.innerHTML = daysO;
    
    //document.getElementById("year-out").replaceWith(yearO);
    //document.getElementById("month-out").replaceWith(monthO);
    //document.getElementById("day-out").replaceWith(daysO);
    return validation = false;
}
if(validation){
    function inputVal(){
        const dayInput = Number(document.getElementById("day").value);
        const monthInput = Number(document.getElementById("month").value);
        const yearInput = Number(document.getElementById("year").value);
    
        console.log(typeof( dayInput,monthInput,yearInput))
    
        if(dayInput<0 || dayInput>32 || monthInput>13 || monthInput<0|| yearInput<1900 || yearInput<0 || isNaN(dayInput)|| isNaN(monthInput)|| isNaN(yearInput)){
            document.getElementById("day").style.color= "red"
            document.getElementById("month").style.color= "red"
            document.getElementById("year").style.color= "red"
            error = document.getElementById("error").style.color = "red"
            return alert("faio");
        }
        calculate();
    }
}
