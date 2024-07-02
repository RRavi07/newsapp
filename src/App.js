import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 15;
  const [progress, setProgress] = useState(0)
  let apiKey = process.env.REACT_APP_NEWS_API
  return (<>
    <div>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='general' />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='entertainment' />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='general' />} />
          {/* <Route path="/healthscience" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='healthscience' />} /> */}
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='technology' />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='science' />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country='in' category='health' />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
  );
}
export default App;
