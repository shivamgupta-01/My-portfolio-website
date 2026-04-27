// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    // Toggle button create करो
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'theme-toggle';
    toggleBtn.id = 'themeToggle';
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    toggleBtn.title = 'Toggle Theme';
    document.body.appendChild(toggleBtn);

    // Saved theme load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    // Toggle click
    toggleBtn.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        const icon = toggleBtn.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            toggleBtn.title = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            toggleBtn.title = 'Dark Mode';
        }
    }
});