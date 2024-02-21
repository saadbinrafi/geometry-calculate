function calculateTriangleArea(){
    // triangle base setting 
    const triangleBaseInput = document.getElementById('triangle-base')

    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base)



    // triangle height setting 
    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText =  triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log(height)



    const area = 0.5 * base * height;
    console.log(area)



    // display show setting
    const triangleAreaSpan  = document.getElementById('triangle-area')

    triangleAreaSpan.innerText = area;

    

}