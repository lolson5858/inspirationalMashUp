const greeting = "Good Morning Luke! Your inspirational poem of the day is.....";
const poemOb = {
  firstLines:["Behold, a being of true heart!", "Today is a good day to be your best self", "Blessed be the fruit"],
  secondLines: ["one that fears no failure,", "FEAR NOT", "like a blackberry glittering in the sun"],
  thirdLines: ["you shall prevail.", "for you are the chosen one.", "go kick life's ass."]
}

const mashup = () => {
  let poem = [''];
  let firstLine = poemOb.firstLines[Math.floor(Math.random() * 3)];
  let secondLine = poemOb.secondLines[Math.floor(Math.random() * 3)];
  let thirdLine = poemOb.thirdLines[Math.floor(Math.random() * 3)];
  poem.push(firstLine + secondLine + thirdLine);
  return poem;
  
}

mashup()
