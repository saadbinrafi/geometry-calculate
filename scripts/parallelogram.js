function calculateParallelogramArea(){

    const parallelogramBaseInput = document.getElementById('parallelogram-base')
    const parallelogramBaseText = parallelogramBaseInput.value;

    const base = parseFloat(parallelogramBaseText);
    console.log(base)




    // parallelogram height setting
    const parallelogramHeightInput = document.getElementById('parallelogram-height')
    
    const parallelogramHeightText = parallelogramHeightInput.value;

    const height = parseFloat(parallelogramHeightText)
    console.log(height);


    const area = base * height;
    console.log(area)


    const parallelogramAreaSpan = document.getElementById('parallelogram-area')

    parallelogramAreaSpan.innerText = area;

}