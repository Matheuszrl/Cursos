function createTableOfContents() {
    const tocNav = document.getElementById('toc-nav');
    const headings = document.querySelectorAll('h1, h2');
    
    headings.forEach(heading => {
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.className = heading.tagName === 'H1' ? 'toc-h1' : 'toc-h2';
        
        tocNav.appendChild(link);
    });
}

function highlightCurrentSection() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const tocLink = document.querySelector(`#toc-nav a[href="#${id}"]`);
            
            if (entry.isIntersecting) {
                document.querySelectorAll('#toc-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                tocLink?.classList.add('active');
            }
        });
    }, { rootMargin: '-50px 0px -50% 0px' });

    document.querySelectorAll('h1[id], h2[id]').forEach(heading => {
        observer.observe(heading);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createTableOfContents();
    highlightCurrentSection();
});