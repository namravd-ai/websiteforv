const messages = [
    "I don’t really know how to say things like this normally… so I made this instead.You are the best thing that has ever happened to me.What do i lose when i hv you and what do i hv when i lose you.",
    "It’s funny how some people just walk into your life and suddenly everything feels a little different,a little better.Your laugh, your smile, the way you look at me, the way you make me feel, it’s all just so amazing.",
    "You probably don’t even realize how much impact you have sometimes,or should i say all the time.Well at the end of the day, i dont mind you being you my life's warden"
];

function openLetter(el) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("letterText");

    let random = Math.floor(Math.random() * messages.length);
    text.innerText = messages[random];

    popup.style.display = "flex";
}

function closeLetter() {
    document.getElementById("popup").style.display = "none";
}