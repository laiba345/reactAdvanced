import logo from './logo.svg';
// 2. 通过import来导入我们的css文件
import './App.css';

function App() {
  return (
    // 1. JSX 让我们像HTML一样写页面结构
    <div className='box'>
      <h1>Hello React</h1>
      {/* 3. 控制逻辑代码 */}
      <button onClick={() => alert('hello')}>按钮</button>
    </div>
  );
}

export default App;
