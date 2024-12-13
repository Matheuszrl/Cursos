const navigation = [
    {
        title: 'Getting Started',
        items: [
            { title: 'Manual', href: '/index.html' },
            { title: 'Installation', href: '/installation' },
            { title: 'Configuration', href: '/configuration' }
        ]
    },
    {
        title: 'Features',
        items: [
            { title: 'Components', href: '/components' },
            { title: 'Layouts', href: '/layouts' },
            { title: 'Styling', href: '/styling' }
        ]
    },
    {
        title: 'Advanced',
        items: [
            { title: 'API Reference', href: '/api' },
            { title: 'Best Practices', href: '/best-practices' }
        ]
    }
];

function createNavigation() {
    const sidebarContent = document.querySelector('.sidebar-content');
    
    navigation.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.className = 'nav-section';
        
        const titleElement = document.createElement('h2');
        titleElement.className = 'nav-section-title';
        titleElement.textContent = section.title;
        
        const itemsList = document.createElement('ul');
        itemsList.className = 'nav-items';
        
        section.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'nav-item';
            
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.title;
            
            listItem.appendChild(link);
            itemsList.appendChild(listItem);
        });
        
        sectionElement.appendChild(titleElement);
        sectionElement.appendChild(itemsList);
        sidebarContent.appendChild(sectionElement);
    });
}

createNavigation();