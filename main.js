const loadData =() => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (data) => {
    const blockQuote = document.getElementById('quote')
    blockQuote.innerHTML = data.quote;
    blockQuote.classList.add('quote')
    
}



loadData()