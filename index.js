function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ` + line.length + ` in line.`
}

function nowServing(line) {
  if(!line.length) {
      return `There is nobody waiting to be served!`;
  } else {
    return "Currently serving " + line.shift() + `.`;
  }
}

function currentLine() {
  if(!line.length) {
    console.log(`This line is currently empty.`);
    return `This line is currently empty.`;
  }
  var lineNamesAndNumbers = []

  for(i = 0; i < line.length; i++) {
    console.log(`The line is currently ` + lineNamesAndNumbers + `.`);
    return `The line is currently ` + lineNamesAndNumbers.join + `.`
  }
  }
}
