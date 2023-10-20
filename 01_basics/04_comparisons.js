console.log(null >0 )
console.log(null == 0)
console.log(null>=0)

// Reson
// in js comparison  and equality check  ==  works diffrently
// comparison convert null to a number , treating it as 0.
// that why null >=0 is true adn null > 0 is false


//=== strict check  it check the value and datatype of the operands