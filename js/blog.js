class Blog {
  constructor() {
    this.blogContent = document.getElementById('blog-content');
    if (!this.blogContent) return;
    
    this.initialize();
  }

  initialize() {
    this.handleRoute();
    window.addEventListener('popstate', () => this.handleRoute());
  }

  showLoading() {
    this.blogContent.innerHTML = `
      <div class="loading">
        loading...
      </div>
    `;
  }

  async loadPost(slug) {
    try {
      const response = await fetch(`/posts/${slug}.md`);
      if (!response.ok) throw new Error('Post not found');
      const markdown = await response.text();
      return marked.parse(markdown);
    } catch (error) {
      console.error('Error loading post:', error);
      return null;
    }
  }

  async handleRoute() {
    const params = new URLSearchParams(window.location.search);
    const post = params.get('post');

    if (post) {
      await this.showPost(post);
    } else {
      await this.showPostList();
    }
  }

  async showPostList() {
    this.showLoading();
    
    try {
      const response = await fetch('/posts/index.json');
      const posts = await response.json();
      
      if (posts.length === 0) {
        this.blogContent.innerHTML = `
          <p class="no-posts">no posts yet... check back soon!</p>
        `;
        return;
      }
      
      this.blogContent.innerHTML = `
        <ul class="post-list">
          ${posts.map(post => `
            <li>
              <a href="?post=${post.slug}">
                ${post.title}
              </a>
              <div class="post-meta">
                <span class="post-date">${new Date(post.date).toLocaleDateString()}</span>
              </div>
            </li>
          `).join('')}
        </ul>
      `;
    } catch (error) {
      console.error('Error loading post list:', error);
      this.blogContent.innerHTML = `
        <div class="error">
          <p>oops! couldn't load posts :(</p>
          <a href="blog.html" class="retry">try again?</a>
        </div>
      `;
    }
  }

  async showPost(slug) {
    this.showLoading();
    
    const content = await this.loadPost(slug);
    if (content) {
      this.blogContent.innerHTML = `
        <article class="post-content">
          ${content}
          <div class="post-footer">
            <a href="blog.html" class="back-link">&larr; back to posts</a>
          </div>
        </article>
      `;

      document.querySelectorAll('pre code').forEach(block => {
        block.className = 'code-block';
      });
    } else {
      this.blogContent.innerHTML = `
        <div class="error">
          <p>post not found :(</p>
          <a href="blog.html" class="back-link">back to posts</a>
        </div>
      `;
    }
  }
}

const blog = new Blog();