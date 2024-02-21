function calculateRectangleArea(){
    //rectangle length setting
    const rectangleLengthInput = document.getElementById('rectangle-length');

    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length);

    // rectangle Width setting 
    const rectangleWidthInout =document.getElementById('rectangle-width');

    const rectangleWidthText =  rectangleWidthInout.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);


    const area = length * width;
    console.log(area)



    // display show setting 
    const rectangleAreaSpan = document.getElementById('rectangle-area')
    
    rectangleAreaSpan.innerText = area;
}