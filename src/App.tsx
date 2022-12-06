import { Outlet } from 'react-router-dom';

export function App() {

  return (
    <div className="App">
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
