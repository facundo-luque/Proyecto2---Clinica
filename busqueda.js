
const options = ['Especialidad Cardiología', 'Especialidad Pediatría', 'Especialidad Traumatología', 'Otra Especialidad'];


const searchInput = document.getElementById('search');
const suggestionsList = document.getElementById('suggestions');


searchInput.addEventListener('input', handleSearch);


function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  

  const matchingOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm)
  );

  
  displaySuggestions(matchingOptions);
}


function displaySuggestions(suggestions) {
  
  suggestionsList.innerHTML = '';

  
  suggestions.forEach(suggestion => {
    const li = document.createElement('li');
    li.textContent = suggestion;

    
    li.addEventListener('click', () => {
      searchInput.value = suggestion;
      suggestionsList.innerHTML = ''; 
    });

    suggestionsList.appendChild(li);
  });
}
