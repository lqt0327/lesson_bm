import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post.md';
import Header from './Header.vue';
// import xx from 'xxx.jpg';
// import App from './App';
function App() {
  return (
    <h2>h2
        <div>
            <Post></Post>
        </div>
    </h2>
  )
}

ReactDOM.render(<Header />, document.getElementById('root'));
