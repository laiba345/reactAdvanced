// 1. 导包   react-dom 专门渲染到DOM浏览器当中；
import { createRoot } from "react-dom/client";
import './index.css'
// 2. 创建 React 根对象
const root = createRoot(document.querySelector("#root"));
// 3. 使用根对象，渲染 React 内容
// <h1>Hello, React</h1> => JSX (写在JS中的HTML)
// root.render(<h1>Hello, React</h1>)

// JSX的规则
// 1. 必须有一个根标签
// 2. 所有标签必须闭合
// 3. 标签属性名称必须是驼峰命名法 className

// 列表渲染
// 1. 数组的map方法
// 2. 列表项要添加 key 属性, key的值要唯一

// 条件渲染
// 1. 逻辑与 &&
//

// 分类菜单数组
const categories = [
  { id: 1, name: "推荐" },
  { id: 2, name: "一人西餐" },
  { id: 3, name: "西贝凉菜" },
  { id: 4, name: "西贝热菜" },
  { id: 5, name: "杂粮主食" },
];

root.render(
  <div>
    <ul className="list">
      {categories.map((item, index) => {
        return (
          <li key={item.id}>
            {/* {index === 0 && <h1>请帮忙推荐内容</h1>} */}
            {item.name}
          </li>
        );
      })}
    </ul>
  </div>
);
