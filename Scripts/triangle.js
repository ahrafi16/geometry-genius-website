function calculateTriangle(){
    // find triangle base
    const triangleBase = document.getElementById('trianle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    // find triangle height
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);
}