步骤
1. 使用 create-react-app 创建项目; npx create-react-app react-demo
2. 修改 App.js 体验用 JavaScript 生成结构、使用样式及控制逻辑

收获： React完全基于JS，只要有JS基础，就可以上手React开发
```
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
```
