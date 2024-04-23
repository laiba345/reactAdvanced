// 1. 导包   react-dom 专门渲染到DOM浏览器当中；
import { createRoot } from "react-dom/client";
// 2. 创建 React 根对象
const root = createRoot(document.querySelector("#root"));
// 3. 使用根对象，渲染 React 内容
// <h1>Hello, React</h1> => JSX (写在JS中的HTML)
// root.render(<h1>Hello, React</h1>)

// JSX的规则
// 1. 必须有一个根标签
// 2. 所有标签必须闭合
// 3. 标签属性名称必须是驼峰命名法 className
root.render(
  <div>
    <h1>Hello React</h1>
  </div>
);
