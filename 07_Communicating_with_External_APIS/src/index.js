const resultsDiv = document.querySelector('#results');
document.addEventListener('DOMContentLoaded', () => {
  const apiSearchForm = document.querySelector('#api-Search');
  
  apiSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = encodeURI(e.target.search.value);
    console.log(query);
    
    
    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}`)
    .then(resp => resp.json())
    .then(data => console.log(data))

    apiSearchForm.reset()
  })
})7