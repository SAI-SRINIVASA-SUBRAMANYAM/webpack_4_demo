export function writeToScreen() {
  document.write(
    `Hello Worl! <i>@${new Date()}</i> <br><hr><br> -Webpack v4 :)`
  );
}

export function saySomeGreets(greet) {
  document.querySelector(
    "body"
  ).innerHTML += `Hello World! <i>${greet}</i> <br><hr><br> -Webpack v4 :)`;
}
