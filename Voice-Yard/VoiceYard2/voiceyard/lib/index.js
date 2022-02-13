//Collapsible
let user = prompt ("Enter the use case", "")
if (user == "Assistant") {
    generateFirstCode();
} else if (user == "Hotel") {
    generateSecondCode();
} else if (user == "Ed") {
    generateThirdCode();
} else if (user == "College") {
    generateFourthCode();
} else if (user == "School") {
    generateFourthCode();
} else if (user == "Book Store") {
    generateFifthCode();
}
function generateFirstCode(){
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Welcome I am msk`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateSecondCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Welcome I am msk`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForHotel(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateThirdCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Welcome I am msk`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForEdTech(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateFourthCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Welcome I am msk`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForSchoolsAndColleges(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateFifthCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Welcome I am msk`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseforBook(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function reset() {
    location.reload();
}
function generate() {
    items = prompt("Enter the items you provide", "");
    mobileNumber = prompt("Enter the mobile number", "");
    emailAddress = prompt ("Enter the email address","");
    supportNumber = prompt("Enter support Mobile Number","");
    supportMailId = prompt("Enter Suport Mail ID","");
}
// RESPONSES

function getBotResponse(input) {
    // Simple responses for a Assistant chatbot
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thank"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "How are you today" || input == "How you doing today" || input == "how are you today"
    ||input == "How's you feeling " || input == "How are you") {
        return "I am fine! How are you doing today";
    } else if (input == "I am doing well" || input == "I am well" || input == "I am great" || input == "I am doing great"
    || input == "I am doing well" || input == "Great") {
        return "Oh that's wonderful";
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
//  Response for bot for a hotel and online food delivery  app
function getBotResponseForHotel(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot"    ) {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What is your menu" || input == "menu please" || input == "MENU PLEASE"|| input == "What you serve"
    || input == "What's in your food list"|| input == "WHAT IS IN YOUR MENU") {
        return "We serve "+ items;
    } else if (input == "I want to order something"|| input == "how can I order something"|| input == "Where to order"
    || input == "ORDER ORDER"|| input == "Order Please" || input == "Take my order" || input == "Make an order" ||
    input=="I want to order") {
        return "You can order by " + "calling to " + mobileNumber + "or " + " email to " + emailAddress + "or by scrolling"
        + " the website";
    } else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help") {
        return "Contact " + supportNumber + "or " + supportMailId;
    }else{
        return "Could you please repeat again! I am still learning";
    }
    // Response for a Ed Website
    function getBotResponseForEd(input) {
        if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
            return "Hello there! How can I help you";
        }else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
            return "Thank you for choosing us! Hope you like the service";
        }else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
        || input == "What are the courses offered by you" || input == "Courses offered" ) {
            return "List of courses offered: ";
        }else if (input == "I want to order something"|| input == "how can I order something"|| input == "Where to order"
        || input == "ORDER ORDER"|| input == "Order Please" || input == "Take my order" || input == "Make an order") {
            return "You can order by " + "calling to " + mobileNumber + "or " + " email to " + emailAddress + "or by scrolling"
            + " the website";
        }else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
        || input == "Support Please" || input == "Support"|| input == "help") {
            return "Contact " + supportNumber + "or " + supportMailID;
        } else{
            return "Could you please repeat again! I am still learning";
        }
    }
}

//  Response for a College Wesbite
function getBotResponseForSchoolsAndColleges(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
    || input == "What are the courses offered by you" || input == "Courses offered" ) {
        return "List of courses offered: " + items;
    } else if (input == "What is the admission criteria for this institure" || input == "Admission in the college"
    || input == "Admission process" || input == "Admissions") {
        return "You should have" +  "% marks and should have cleared the ";
    }  else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
    || input =="Need assistance") {
        return "Contact " + supportNumber + "or " + supportMailID;
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
//  Response for a Book store
function getBotResponseforBook(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What books do you offer" || input == "List of Books" || input == "Which books do you offer"
    || input == "What are the books sold by you" || input == "Books offered" ) {
        return "List of Books offered: " + items;
    } else if(input == "Do you also sell offline" || input == "Where is your store located" ||input=="Can you also be find offline"
    || input == "where are your stores" || input == "What is your retail model"){
        return "We are available at" + locations;
    } else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
    || input =="Need assistance") {
        return "Contact " + supportNumber + "or " + supportMailID;
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
function getBotResponseForEdTech() {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
    || input == "What are the courses offered by you" || input == "Courses offered" ) {
        return "List of courses offered: " + items;
    } else {
        return "Can you repeat please! I am still learning"
    }
}