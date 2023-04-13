import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

// export default function App() {
//   const [age, setAge] = useState(5);
//   const [name, setName] = useState('');

//   const onChangeAge = () => {
//     setAge(age + 1);
//   };

//   const onChangeName = () => {
//     setName('Cee');
//   };

//   return (
//     <div className='container'>
//       <div>Xin chào: {name}</div>
//       <div>Tuổi là: {age}</div>
//       <div>
//       <button onClick={onChangeAge}>Tăng tuổi thêm 1</button>
//       </div>
     
//       <button onClick={onChangeName}>Hiển thị tên</button>
//     </div>
//   );
// }


// const Loading = () => {
//   return(
//     <div className='loader'></div>
//   )
// }
export default function App (){
  // const [isLoading, setIsLoading] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 5000)
  // }, [])
  // return(
  //   <div> {isLoading && <Loading />}</div>
  // )
  // const [name, setName] = useState();
  // const [price, setPrice] = useState();
  // const [products, setProducts] = useState([]);
  // const total = useMemo(() => {
  //   const result = products.reduce((acc, ele) => {
  //     console.log('Tính toán lại ...');
  //     return acc + ele.price;
  //   }, 0);
  //   return result;
  // }, [products]);


  // const onAddProduct = () => setProducts([...products, { name, price: Number(price) }]);

  // return (
  //   <div className='container'>
  //     <input
  //       placeholder='Enter name...'
  //       value={name}
  //       onChange={e => setName(e.target.value)}
  //     />
  //     <br />
  //     <input
  //       placeholder='Enter price...'
  //       value={price}
  //       onChange={e => setPrice(e.target.value)}
  //     />
  //     <div onClick={onAddProduct}>Add product</div>
  //     <div>Total: {total}</div>
  //     <ul>
  //       {products.map((e, i) => <li key={i}>{e.name} - {e.price}</li>)}
  //     </ul>
  //   </div>
  // );

  // Bai 1

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState();
  const [multiply, setMultiply] = useState();
  const handleAdd = () => {
    const result = parseInt(number1) + parseInt(number2);
    setSum(result);
  }
  
  const handleMultiply = () => {
    const result = parseInt(number1) * parseInt(number2);
    setMultiply(result);
  }
  
  return(
    <div>
      <div>
      <label>Number1</label>
      <input placeholder='number1' value={number1} onChange={e => setNumber1(e.target.value)}></input>
      </div>
      <div>
        <label>Number2</label>
      <input placeholder='number2' value={number2} onChange={e => setNumber2(e.target.value)}></input>

      </div>

      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMultiply}>multiply</button>
        <div>Sum: {sum}</div>
        <div>multiply: {multiply}</div>
      </div>
    </div>

  )


  // const [time, setTime] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const now = new Date();
  //     setTime(now.toLocaleTimeString());
  //   }, 5000);
  // }, []);

  // return (
  //   <div>
  //     {time ? <p>{time}</p> : <p>Loading...</p>}
  //   </div>
  // );

}













    
  