import React, { createContext, useEffect, useState } from "react";
import Movie from "./pages/Movie";
import Show from "./pages/Show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

type Props = {};

// コンテキストの型定義
interface MyContextType {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

// コンテキストの初期値
const defaultContextValue: MyContextType = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

// コンテキストの作成
export const MyContext = createContext<MyContextType>(defaultContextValue);

const App = (props: Props) => {
  // the type of show
  // もし、複数のコンポーネントで共有する値の場合はusecontextを使う。そうでなければpropsでいい
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MyContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/show" element={<Show />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
