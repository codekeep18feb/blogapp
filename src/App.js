import logo from "./logo.svg";
import "./App.css";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link,  
  BrowserRouter,
  HashRouter
}   
from 'react-router-dom'; 
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import ListBlog from "./components/ListBlog";
import BlogSingle from "./components/BlogSingle";
import TestRichEditor from "./components/TestRichEditor";
import TestComp from "./components/TestComp"
import TestRichEditorDetail from "./components/TestRichEditorDetail";
import TestRichEditorParentPage from "./components/TestRichEditorParentPage";
import TestRichEditorParentPageReact from "./components/TestRichEditorParentPageReact"
import ModalWrapper from "./components/ModalWrapper"
import TestRichEditorParentPageReactTry2 from "./components/TestRichEditorParentPageReactTry2";
import TestRichEditorParentPageReactTry3 from "./components/TestRichEditorParentPageReactTry3"
import TREWithControls from "./components/TREWithControls";
import NewTextEditorV1 from "./components/NewTextEditorV1";
import CreateContentComp from "./components/CreateContentComp";
// import CreateBlog from "./components/CreateBlog";


function App() {
  return (
    // <BrowserRouter>
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
<HashRouter base="/">
  
    
    <Routes>

    <Route exact path='/' element={< Home />}></Route>  
    <Route exact path='/create_blog' element={< CreateBlog />}></Route>  
    <Route exact path='/blog_single/:id' element={< BlogSingle />}></Route>  
    <Route exact path='/list_blog' element={< ListBlog />}></Route>  
    <Route exact path='/test_rich_editor_js' element={< TestRichEditorParentPage />}></Route>  
    <Route exact path='/test_rich_editor_react' element={< TestRichEditorParentPageReact />}></Route>  
    
    <Route exact path='/text_editor_v1' element={< NewTextEditorV1 startHtmlString="<h1>111222</h1><h3>222333</h3><p> 333444</p>"/>}></Route>  
    <Route exact path='/create_content' element={< CreateContentComp />}></Route>  
    
    
    {/* <Route exact path='/tre_with_controls' element={< TREWithControls />}></Route>   */}
    {/* <Route exact path='/test_rich_editor_react_try2' element={< TestRichEditorParentPageReactTry2 />}></Route>   */}
    <Route exact path='/test_rich_editor_react_try3' element={< TestRichEditorParentPageReactTry3 />}></Route>  
    <Route exact path='/just_for_test' element={<TestComp />}></Route>  
    {/* <Route exact path='/test_rich_detail' element={< TestRichEditorDetail htmlData={}/>}></Route>   */}
    {/* <Route exact path='/contact' element={< Contact />}></Route>   */}
    </Routes>
    </HashRouter>


  );
}

export default App;
