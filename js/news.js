const newsContainer = document.querySelector('.news-container');

fetch('./data/news.json')
    .then(response => response.json())
    .then(data => {
        const newsData = data.news;
        newsData.forEach(group => {
            const dateGroup = document.createElement('div');
            dateGroup.classList.add('news-date-group');

            const dateHeader = document.createElement('div');
            dateHeader.classList.add('news-date-header');
            dateHeader.textContent = group.date;
            dateGroup.appendChild(dateHeader);

            group.posts.forEach(post => {
                const newsPost = document.createElement('div');
                newsPost.classList.add('news-post');

                if (post.img) {
                    const newsImg = document.createElement('div');
                    newsImg.classList.add('news-img');
                    const img = document.createElement('img');
                    img.src = post.img;
                    newsImg.appendChild(img);
                    newsPost.appendChild(newsImg);
                }

                const newsContent = document.createElement('div');
                newsContent.classList.add('news-content');

                const newsTitle = document.createElement('div');
                newsTitle.classList.add('news-title');
                newsTitle.textContent = post.title;
                newsContent.appendChild(newsTitle);

                const newsInfo = document.createElement('div');
                newsInfo.classList.add('news-info');
                newsInfo.innerHTML = post.info;
                newsContent.appendChild(newsInfo);

                if (post.buttons && post.buttons.length > 0) {
                    const newsButtons = document.createElement('div');
                    newsButtons.classList.add('news-buttons');
                    post.buttons.forEach(button => {
                        const a = document.createElement('a');
                        a.href = button.link;
                        a.textContent = button.text;
                        a.target = "_blank";
                        newsButtons.appendChild(a);
                    });
                    newsContent.appendChild(newsButtons);
                }

                newsPost.appendChild(newsContent);
                dateGroup.appendChild(newsPost);
            });

            newsContainer.appendChild(dateGroup);
        });
    })
    .catch(error => console.error('Error loading news data:', error));