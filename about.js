// Create the HTML structure dynamically
document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    // Create and append the <head> element
    const head = document.createElement('head');
    const title = document.createElement('title');
    title.textContent = 'Simple web page Template';
    head.appendChild(title);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    head.appendChild(link);
    document.documentElement.appendChild(head);

    // Create and append the <nav> element
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'background');
    
    // Create the logo
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = 'https://media.geeksforgeeks.org/gfg-gg-logo.svg';
    logoImg.style.height = '30px';
    logoImg.alt = 'Logo';
    logoDiv.appendChild(logoImg);
    
    // Create the navigation list
    const navList = document.createElement('ul');
    navList.classList.add('nav-list');
    const navItems = [
        { href: '#web', text: 'Web Technology' },
        { href: '#program', text: 'C Programming' },
        { href: '#course', text: 'Courses' }
    ];
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        li.appendChild(a);
        navList.appendChild(li);
    });

    // Create the search input and button
    const rightNav = document.createElement('div');
    rightNav.classList.add('rightnav');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.name = 'search';
    searchInput.id = 'search';
    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'btn-sm');
    searchButton.textContent = 'Search';
    rightNav.appendChild(searchInput);
    rightNav.appendChild(searchButton);

    // Append all elements to the nav
    nav.appendChild(logoDiv);
    nav.appendChild(navList);
    nav.appendChild(rightNav);
    body.appendChild(nav);

    // Create and append the first section
    const firstSection = document.createElement('section');
    firstSection.classList.add('firstsection');
    const boxMain1 = document.createElement('div');
    boxMain1.classList.add('box-main');
    const firstHalf1 = document.createElement('div');
    firstHalf1.classList.add('firstHalf');
    const h1_1 = document.createElement('h1');
    h1_1.classList.add('text-big');
    h1_1.id = 'web';
    h1_1.textContent = 'Web Technology';
    const p1 = document.createElement('p');
    p1.classList.add('text-small');
    p1.textContent = 'HTML stands for HyperText Markup Language. It is used to design web pages using a markup language...';
    firstHalf1.appendChild(h1_1);
    firstHalf1.appendChild(p1);
    boxMain1.appendChild(firstHalf1);
    firstSection.appendChild(boxMain1);
    body.appendChild(firstSection);

    // Create and append the second section
    const secondSection = document.createElement('section');
    secondSection.classList.add('secondsection');
    const boxMain2 = document.createElement('div');
    boxMain2.classList.add('box-main');
    const firstHalf2 = document.createElement('div');
    firstHalf2.classList.add('firstHalf');
    const h1_2 = document.createElement('h1');
    h1_2.classList.add('text-big');
    h1_2.id = 'program';
    h1_2.textContent = 'C Programming';
    const p2 = document.createElement('p');
    p2.classList.add('text-small');
    p2.textContent = 'C is a procedural programming language. It was initially developed by Dennis Ritchie as a system programming language to write operating system...';
    firstHalf2.appendChild(h1_2);
    firstHalf2.appendChild(p2);
    boxMain2.appendChild(firstHalf2);
    secondSection.appendChild(boxMain2);
    body.appendChild(secondSection);

    // Create and append the third section (Java)
    const section = document.createElement('section');
    section.classList.add('section');
    const paras = document.createElement('div');
    paras.classList.add('paras');
    const h1_3 = document.createElement('h1');
    h1_3.classList.add('sectionTag', 'text-big');
    h1_3.textContent = 'Java';
    const p3 = document.createElement('p');
    p3.classList.add('sectionSubTag', 'text-small');
    p3.textContent = 'Java has been one of the most popular programming language for many years...';
    paras.appendChild(h1_3);
    paras.appendChild(p3);
    section.appendChild(paras);
    body.appendChild(section);

    // Create and append the footer
    const footer = document.createElement('footer');
    footer.classList.add('background');
    const pFooter = document.createElement('p');
    pFooter.classList.add('text-footer');
    pFooter.textContent = 'Copyright ©-All rights are reserved';
    footer.appendChild(pFooter);
    body.appendChild(footer);

    // Apply the styles (styles are added in the <head> via external stylesheet link)
});
