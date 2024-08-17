///By default shows the English Jokes
fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokedata => {
    const jdata = jokedata.attachments[0].text;
    // document.getElementById("jokestext").innerHTML = jdata;

    const renderjoke = document.getElementById("jokestext");

    renderjoke.innerHTML = jdata;
});

fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1bdebf1a79c4eb18c022138583b1')
        .then(data => data.json())
        .then(jokedata => {
            const jdata = jokedata.jokeContent;
            // document.getElementById("jokestext").innerHTML = jdata;

            //alert(jdata);
            const renderjoke = document.getElementById("jokestext");

            //renderjoke.innerHTML = jdata;
        });




function getjokes() {
    //alert("ram");
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokedata => {
            const jdata = jokedata.attachments[0].text;
            // document.getElementById("jokestext").innerHTML = jdata;

            const renderjoke = document.getElementById("jokestext");

            renderjoke.innerHTML = jdata;
        });
    return true;
}


function getHindiJokes() {
    fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=1bdebf1a79c4eb18c022138583b1')
        .then(data => data.json())
        .then(jokedata => {
            const jdata = jokedata.jokeContent;
            // document.getElementById("jokestext").innerHTML = jdata;

            const renderjoke = document.getElementById("jokestext");

           // alert(jdata);
            renderjoke.innerHTML = jdata;
        });
    return true;
}


document.getElementById('btnEnglishJokes').addEventListener('click', function() {
    getjokes();
  });

  document.getElementById('btnHindiJokes').addEventListener('click', function() {
    getHindiJokes();
  });