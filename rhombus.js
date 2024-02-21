function calculateRhombusArea(){

    const rhombusBaseInput = document.getElementById('rhombus-base');
    const rhombusBaseText = rhombusBaseInput.value;
    const base = parseFloat(rhombusBaseText)
    console.log(base)




  // rhombus height setting
    const rhombusHeightInput = document.getElementById('rhombus-height');
    const rhombusHeightText = rhombusHeightInput.value;
    const height = parseFloat(rhombusHeightText);
    console.log(height);

    const area = 0.5 * base * height
    console.log(area)


    const rhombusAreaSpan = document.getElementById('rhombus-area') 

    rhombusAreaSpan.innerText = area;



}