import React from 'react'; // Only import React

// You don't need BlogPost component if you're not using it to render individual posts
// If you want to use a BlogPost component, you'd need to modify this further.
// For simplicity, I'm assuming we'll just render the content here directly.

function Home() {
  // Define your blog posts directly here in English
  const posts = [
    {
      id: 1,
      title: "Welcome to My Awesome React Blog!", // Your English Title
      date: "Published on June 8, 2025", // Current Date
      content: "Hello everyone! This is my first blog post where I'll be sharing my journey and insights into various topics, especially in web development and technology. Stay tuned for more engaging content!" // Your English Content
    },
    {
      id: 2,
      title: "Exploring the World of Frontend Development", // Your English Title
      date: "Published on June 7, 2025",
      content: "Frontend development is a fascinating field. Learning new frameworks like React and understanding tools like Vite makes building user interfaces efficient and enjoyable. Let's dive deeper into it!" // Your English Content
    },
    {
      id: 3,
      title: "My Journey with Git and GitHub", // Your English Title
      date: "Published on June 6, 2025",
      content: "Version control is essential for any developer. Git and GitHub have been invaluable tools for managing my projects, collaborating, and tracking changes efficiently. Highly recommended for everyone." // Your English Content
    }
    // You can add more English posts here by following the same structure:
    /*
    ,{
      id: 4, // Make sure this ID is unique
      title: "Another English Post Title",
      date: "Published on June X, 2025",
      content: "This is the content for my new English post. You can write anything you like here."
    }
    */
  ];

  return (
    <section className="blog-posts-section">
      <h2>Latest Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available at the moment. Please check back later!</p>
      ) : (
        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-preview">
              <h3>{post.title}</h3> {/* Changed to h3 for hierarchy */}
              <p className="post-date">{post.date}</p>
              <p>{post.content}</p> {/* Displaying full content, or you can use .substring for snippet */}
              {/* You can add a "Read More" link here if you want separate detail pages */}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;