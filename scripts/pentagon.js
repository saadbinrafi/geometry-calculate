
function calculatePentagonArea(){
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;

    const perimeter = parseFloat(pentagonPerimeterText)
    // console.log(perimeter)



    const pentagonApothemInput = document.getElementById('pentagon-apothem');
    const pentagonApothemText = pentagonApothemInput.value;
    const apothem = parseFloat(pentagonApothemText);
    // console.log(apothem);


    const area = 0.5 * perimeter * apothem;
    console.log(area)


    // display show setting
    const pentagonAreaSpan  = document.getElementById('pentagon-area')

    pentagonAreaSpan.innerText = area;
}