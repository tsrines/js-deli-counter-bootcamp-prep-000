

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
}

function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
  
}

var counter = 0

function takeANumbertwo(counter){
  
  let i = 0, l = line.length; i < l; i++) 
    
  
  return "Welcome your ticket number, ${name}"
}





function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numName = []

  for (let i = 0, l = line.length; i < l; i++) {
    numName.push(`${i + 1}. ${line[i]}`)
  }

  console.log(`The line is currently: ${numName.join(', ')}`)
}


currentLine(["Steve", "Frank", "Joe"])
  
