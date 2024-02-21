function calculateEllipseArea(){
    // mejor setting 
    const ellipseMajorInput = document.getElementById('ellipse-major')
    const ellipseMajorText = ellipseMajorInput.value;
    const major = parseFloat(ellipseMajorText);
    // console.log(major);


    
    // minior setting 
    const ellipseMinorInput = document.getElementById('ellipse-minor')
    const ellipseMinorText = ellipseMinorInput.value;
    const minor = parseFloat(ellipseMinorText);
    // console.log(minor)



    const area = 3.14 * major * minor;
    console.log(area)



    // show display setup 
    const ellipseAreaSpan = document.getElementById('ellipse-area')

    ellipseAreaSpan.innerText = area;

}