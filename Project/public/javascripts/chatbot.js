
const inputField = document.getElementById("input")
welcome();
note();

inputField.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    // var emptyBox = document.querySelector('div.empty-box'); 
    // emptyBox.innerHTML = ''; 
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

const trigger = [
  ["chan"],
  //0 
  ["hi", "hey", "hello"],
  //1
  ["how are you", "how are things"],
  //2
  ["what is going on", "what is up"],
  //3
  ["happy", "good", "well", "fantastic", "cool", "fine"],
  //4
  ["bad", "bored", "tired", "sad"],
  //5
  ["tell me story", "tell me joke"],
  //6
  ["thanks", "thank you"],
  //7
  ["bye", "good bye", "goodbye"],
  //8
  
];
  
const reply = [
  ["Hi Chan~"],
  //0 
  ["Hello!", "Hi!", "Hey!", "Hi there!"], 
  //1
  [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
  //2
  [
      "Nothing much",
      "Exciting things!"
    ],
  //3
  ["Glad to hear it"],
  //4
  ["Why?", "Cheer up buddy"],
  //5
  ["What about?", "Once upon a time..."],
  //6
  ["You're welcome", "No problem"],
  //7
  ["Goodbye", "See you later"],
  //8
];

const robot = [
  "How do you do, fellow human",
  "I am not a robot",
  "You are a robot, not me（￣へ￣）"
];

const miss = [
    "Hm...",
    "Bro...",
    "Go on...",
    "Try again",
    "I'm listening...",
    "I don't understand...",
    "What are you saying?"
];

const hot = [
  "One Piece",
  "Naruto Shippuden",
  "Tokyo Ghoul",
  "Doraemon",
  "Kimetsu No Yaiba",
  "Sword Art Online"
];
const newest = [
  "One Piece",
  "Naruto Shippuden",
  "Tokyo Ghoul",
  "Doraemon",
  "Kimetsu No Yaiba",
  "Sword Art Online"
];
const update = [
  "One Piece - chapter 999",
  "Naruto Shippuden - chapter 999",
  "Tokyo Ghoul - chapter 999",
  "Doraemon - chapter 999",
  "Kimetsu No Yaiba - chapter 999",
  "Sword Art Online - chapter 999"
];

function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
} 

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else if (text.match(/hot/gi)) {
    product = "One of the hottest: " + hot[Math.floor(Math.random() * hot.length)];
  } else if (text.match(/new/gi)) {
    product = "One of the newest: " + newest[Math.floor(Math.random() * newest.length)];
  } else if (text.match(/update/gi)) {
    product = "Updated: " + newest[Math.floor(Math.random() * update.length)];
  } else {
    product = miss[Math.floor(Math.random() * miss.length)];
  }

  //update DOM

  addChat(input, product);
}

function addChat(input, product) {
  const chatting = document.getElementById("chatting");

  let userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.innerHTML = ` <span class="user-response">${input}</span> `;
  chatting.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.innerHTML = ` <span class="bot-response">${product}</span>`;
  chatting.appendChild(botDiv);
}


function welcome(){
  const chatting = document.getElementById("chatting");

  let botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.innerHTML = ` <span class="bot-response">❀ Welcome to the World of Moonlight ❀</span>`;
  chatting.appendChild(botDiv);
}

function note(){
  const chatting = document.getElementById("chatting");

  let botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.innerHTML = ` <span class="bot-response">>> Note: Just use English.</span>`;
  chatting.appendChild(botDiv);
}

