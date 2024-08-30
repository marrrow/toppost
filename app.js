document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');

    // Mock data
    const mockPosts = [
        {
            id: 1,
            text: "Breaking news: Major technological breakthrough announced!",
            views: 50000,
            channel: { username: "technews", title: "Tech News Daily" }
        },
        {
            id: 2,
            text: "New recipe: Delicious 5-minute chocolate cake you can make in a mug!",
            views: 30000,
            channel: { username: "quickrecipes", title: "Quick & Easy Recipes" }
        },
        {
            id: 3,
            text: "Travel alert: Hidden gems in Europe you need to visit this summer!",
            views: 40000,
            channel: { username: "travelinsider", title: "Travel Insider" }
        },
        {
            id: 4,
            text: "Fitness tip: Simple 10-minute workout routine for busy professionals",
            views: 35000,
            channel: { username: "fitnessguru", title: "Fitness Guru" }
        },
        {
            id: 5,
            text: "Movie review: Latest blockbuster exceeds all expectations!",
            views: 45000,
            channel: { username: "moviebuff", title: "Movie Buff Reviews" }
        }
    ];

    function displayPosts(posts) {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <a href="https://t.me/${post.channel.username}/${post.id}" target="_blank">
                    ${post.text}
                </a>
                <p class="post-info">Views: ${post.views.toLocaleString()} | Channel: ${post.channel.title}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function fetchViralPosts() {
        // Simulate API call delay
        setTimeout(() => {
            // Randomly shuffle the mock posts to simulate "refreshing"
            const shuffledPosts = [...mockPosts].sort(() => 0.5 - Math.random());
            displayPosts(shuffledPosts);
        }, 500);
    }

    // Initial load
    fetchViralPosts();

    // Add refresh button
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Refresh';
    refreshButton.style.marginBottom = '10px';
    refreshButton.addEventListener('click', fetchViralPosts);
    document.body.insertBefore(refreshButton, postsContainer);
});
