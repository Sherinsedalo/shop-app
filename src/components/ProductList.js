import './ProductList.css'
export function ProductList(props) {

  return <>
  <h1>Reader Models</h1>
  <div className='list'> {props.children}</div>
 
  </>;
}
