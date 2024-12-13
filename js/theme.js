function initializeTheme() {
    const themeButton = document.getElementById('theme-button');
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    themeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

initializeTheme();