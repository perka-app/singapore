import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router';
import AnimatedGridPattern from 'src/components/ui/animated-grid-pattern';
import { cn } from 'src/lib/utils';
import { NotFound } from './containers/NotFound';
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/:organisation" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={0.1}
          className={cn(
            '[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[180%] skew-y-12 z-negative',
          )}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
