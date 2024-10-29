document.getElementById('wordsButton').addEventListener('click', function(){
    let wordsInput = document.getElementById('wordsInput').value;
    let Pattern = /\b\w+\b/g;
    let words = wordsInput.match(Pattern);
    let wordsCout = words ? words.length : 0;
  document.write('К-сть слів: ' + wordsCout);
});

