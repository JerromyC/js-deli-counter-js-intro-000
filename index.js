function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ` + line.length + ` in line.`
}

function nowServing() {
  if(!line.length) {
      console.log(`There is nobody waiting to be served!`);
  }

}