document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const themeId = this.getAttribute('data-theme');
            const themeCode = document.getElementById(themeId).textContent;
            
            navigator.clipboard.writeText(themeCode)
                .then(() => {
                    // Visual feedback
                    this.textContent = 'Copied!';
                    this.classList.add('copied');
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.textContent = 'Copy Theme';
                        this.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    this.textContent = 'Failed to copy';
                    
                    setTimeout(() => {
                        this.textContent = 'Copy Theme';
                    }, 2000);
                });
        });
    });
});
