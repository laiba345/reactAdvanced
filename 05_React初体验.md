效果演示
- 需求：渲染一个 h1 元素，内容为：Hello, React
- 步骤：
    1. 导包 
    2. 创建 React 根对象
    3. 使用根对象，渲染 React 内容
```
// 1. 导包   react-dom 专门渲染到DOM浏览器当中；
import { createRoot } from 'react-dom/client'
// 2. 创建 React 根对象
const root = createRoot(document.querySelector('#root'))
// 3. 使用根对象，渲染 React 内容
// <h1>Hello, React</h1> => JSX (写在JS中的HTML)
root.render(<h1>Hello, React</h1>)
```
