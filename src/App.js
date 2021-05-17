import Header from './blocks/Header/Header';
import Blog from "./blocks/Blog/Blog";
import BlogNewsPage from "./blocks/BlogNewsPage/BlogNewsPage";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Blog />
      <BlogNewsPage />
    </div>
  );
}

export default App;
