var katzDeli = []
function takeANumber(line, name){
  katzDeliLine.push(name)
  return line.length
}
function nowServing(line){
  if(line.length === 0) return "There is nobody waiting to be served!"
  else{
    return line.shift()
  }
}
function currentLine(line){
  if(line.length === 0) return "The line is currently empty."
  else{
    var string = "The line is currently: "
    for(var i = 0; i < line.length; i++){
      var place = i + 1
      var person = line[i]
      string += `${place}. ${person} `
    }
  }
  return string
}
