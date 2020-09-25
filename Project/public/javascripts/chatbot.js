
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
  ["hi", "hey", "hello"],
  ["how are you", "how are things"],
  ["happy", "good", "well", "fantastic", "cool", "fine"],
  ["bad", "bored", "tired", "sad"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye"],  
];
  
const reply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"], 
  [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
  ["Glad to hear it"],
  ["Why?", "Cheer up~"],
  ["You're welcome", "No problem"],
  ["Goodbye", "See you later"],
];

const robot = [
  "Er, you call me?",
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
  "Haikyuu",
  "Death Note",
  "Tokyo Ghoul",
  "Black Clover",
  "Detective Conan",
  "Attack On Titan",
  "Sousei No Onmyouji",
  "Boku No Hero Academia",
  "Masumune-Kun No Revenge"
];

const comment = [
  "I think you should read ",
  "How about ",
  "You might like ",
];
const suggest = [
  "Haikyuu",
  "Doraemon",
  "One Piece",
  "Death Note",
  "Tokyo Ghoul",
  "Black Clover",
  "Detective Conan",
  "Attack On Titan",
  "Sword Art Online",
  "Kimetsu No Yaiba",
  "Naruto Shippuden",
  "Sousei No Onmyouji",
  "Boku No Hero Academia",
  "Masumune-Kun No Revenge"
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
  } else if (text.match(/suggest/gi) || text.match(/manga/gi)) {
    product = comment[Math.floor(Math.random() * comment.length)] + suggest[Math.floor(Math.random() * suggest.length)];
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

