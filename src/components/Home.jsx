// src/components/Home.jsx
import React, { useState, useEffect } from 'react'; // Import hooks
import BlogPost from './BlogPost'; // Import the BlogPost component

function Home() {
  // State variables using the useState hook
  const [posts, setPosts] = useState([]); // Holds our list of blog posts
  const [loading, setLoading] = useState(true); // Tracks if data is still loading
  const [error, setError] = useState(null); // Stores any error messages

  // useEffect hook for side effects, like data fetching
  // The empty dependency array `[]` means this effect runs only once after the initial render.
  useEffect(() => {
    const fetchPosts = async () => { // Define an asynchronous function
      try {
        // Simulate fetching data from a mock API endpoint
        // We use JSONPlaceholder for dummy blog posts. `_limit=5` gets only 5 posts.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

        // Check if the network request was successful (status code 200-299)
        if (!response.ok) {
          // If not successful, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response body into JavaScript objects
        const data = await response.json();

        // Format the fetched data to match the props expected by our BlogPost component
        const formattedPosts = data.map(post => ({
          id: post.id, // Unique key for React lists
          title: post.title,
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          content: post.body.substring(0, 150) + '...' // Take first 150 characters of the body
        }));

        // Update the 'posts' state with the fetched and formatted data
        setPosts(formattedPosts);

      } catch (err) { // Catch any errors that occur during the fetch operation (Exception Handling)
        setError(err.message); // Set the error state
        console.error("Failed to fetch posts:", err); // Log the error for debugging
      } finally { // This block always runs, whether try succeeds or catch fails
        setLoading(false); // Set loading to false once fetching is complete (or failed)
      }
    };

    fetchPosts(); // Call the async function when the component mounts
  }, []); // Empty dependency array means this runs only once

  // Conditional Rendering: Show loading, error, or posts based on state
  if (loading) {
    return <div className="loading-message">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section className="blog-posts-section">
      <h2>Latest Posts</h2>
      {posts.length === 0 ? ( // If no posts are fetched or available
        <p>No posts available.</p>
      ) : ( // If posts are available, map over them to render BlogPost components
        posts.map(post => (
          <BlogPost
            key={post.id} // Essential for React lists to identify unique items
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))
      )}
    </section>
  );
}

export default Home;