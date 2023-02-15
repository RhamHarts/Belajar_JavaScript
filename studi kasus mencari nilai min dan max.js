function minMax(arrayOfNumbers){
    let currentMin = arrayOfNumbers[0]
    let currentMax = arrayOfNumbers[0]
    for (value of arrayOfNumbers){
      if (value < currentMin){
        currentMin = value
        console.log(`nilai dari currentMin saat ini: ${currentMin}`)
      } else if ( value > currentMax){
        currentMax = value
        console.log(`nilai dari currentMin saat ini: ${currentMax}`)
      }
    }
    console.log(`hasil akhir dari currentMin adalah: ${currentMin} \n dan hasil akhir dari CurrentMax adalah: ${currentMax}`)
 
}
 
minMax([8,-6,0,9,40,2,23,50,2,-3,-15,15,-23,71])