document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    function fetchViralPosts() {
        fetch('http://localhost:3000/api/viral-posts')
            .then(response => response.json())
            .then(data => {
                postsContainer.innerHTML = '';
                data.posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.className = 'post';
                    postElement.innerHTML = `
                        <a href="https://t.me/${post.channel.username}/${post.id}" target="_blank">
                            ${post.text.slice(0, 100)}...
                        </a>
                        <p class="post-info">Views: ${post.views} | Channel: ${post.channel.title}</p>
                    `;
                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                postsContainer.innerHTML = '<p>Failed to load viral posts. Please try again later.</p>';
            });
    }

    fetchViralPosts();

    // Optional: Add refresh functionality
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh';
    refreshButton.addEventListener('click', fetchViralPosts);
    document.body.insertBefore(refreshButton, postsContainer);
});
