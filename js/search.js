class SearchBar {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.searchContainer = document.getElementById('search-container');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', () => this.handleSearch());
        document.addEventListener('click', (e) => this.handleClickOutside(e));
    }

    handleSearch() {
        const query = this.searchInput.value.toLowerCase();
        
        if (query.length === 0) {
            this.searchResults.classList.add('hidden');
            return;
        }

        // Mock search results - replace with actual search logic
        const results = [
            { title: 'Getting Started Guide', url: '#getting-started' },
            { title: 'Installation Instructions', url: '#installation' },
            { title: 'Component Documentation', url: '#components' }
        ].filter(item => item.title.toLowerCase().includes(query));

        this.displayResults(results);
    }

    displayResults(results) {
        this.searchResults.innerHTML = '';
        
        if (results.length === 0) {
            this.searchResults.classList.add('hidden');
            return;
        }

        results.forEach(result => {
            const item = document.createElement('a');
            item.href = result.url;
            item.className = 'search-result-item';
            item.textContent = result.title;
            this.searchResults.appendChild(item);
        });

        this.searchResults.classList.remove('hidden');
    }

    handleClickOutside(event) {
        if (!this.searchContainer.contains(event.target)) {
            this.searchResults.classList.add('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SearchBar();
});