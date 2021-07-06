let birthdaymessage = {
    firstdata: ["my dear", "darling", "love", "sweetheart", "sweetie", "pumpkin"],
    seconddata: ["lots of happiness", "nothing but the best", "all the love in the world", "good health", "a life full of unforgettable moments", "an amazing day", "a day filled with everything your heart desires"],
    thirddata: ["On your birthday I’m going to share the secret to staying young: lie about your age.",
    "Warning! I think your postman is stealing all the money I put in your cards…",
    "Age is a case of mind over matter - if you don’t mind, it doesn’t matter.",
"There are two great days in a person’s life – the day we are born and the day we discover why.",
"In the end, it’s not the years in your life that count, it’s the life in your years.",
"As you get older, three things happen: the first is your memory goes, and I can’t remember the other two.",
"Birthdays are nature’s way of telling us to eat more cake!"],

generate () {
    const first = this.firstdata[Math.floor(Math.random() * this.firstdata.length)];
    const second = this.seconddata[Math.floor(Math.random() * this.seconddata.length)];
    const third = this.thirddata[Math.floor(Math.random() * this.thirddata.length)];
    
    return `Happy birthday ${first}! I wish you ${second}. ${third}`;
}
};
console.log(birthdaymessage.generate());
