import { useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState('');
  const [goldInput,setGoldInput] = useState(0);
  const [silverInput,setSilverInput] = useState(0);
  const [bronzeInput,setBronzeInput] = useState(0);



  //국가추가
    const addCountry = (e)=> {
    e.preventDefault();
    const existingCountry = countries.find((country)=>{
      if(country.name === countryInput){
        return true;
      } else {
        return false;
      }
    })
    if(existingCountry){
      alert('이미 등록된 국가입니다.')
    }else{
    const newCountry ={
        name : countryInput,
        gold : goldInput ? parseInt(goldInput) : 0,
        silver : silverInput ? parseInt(silverInput) : 0,
        bronze : bronzeInput ? parseInt(bronzeInput) : 0,
    }
    setCountries([...countries, newCountry])
    }



  // .sort((a, b) => b.gold - a.gold); 
  // setCountryInput('');
  // setGoldInput('');
  // setSilverInput('');
  // setBronzeInput('');

  }

//업데이트
  const updateCountries = (e) =>{
    e.preventDefault();
  const existingCountry = countries.find((country)=>{
    if(country.name === countryInput){
      return true;
    } else {
      return false;
    }
  })

  if(existingCountry){
    setCountries(
      countries.map((country) => {
        if(country.name === countryInput){
          return{
            name :country.name,
            gold: goldInput,
            silver: silverInput,
            bronze: bronzeInput,
          }
        } else {
          return country;
        }
      })
    )
  } else{
    alert('등록되지 않은 국가입니다.')
  }
  }

//삭제
const deleteCountrey = (name) => {
  setCountries(countries.filter((country) => {
    if (country.name !== name){
    return country
    };
  }))
  alert(`${name}이 삭제되었습니다.`)
}

  return (

 <div className='main-container'>
   <h1>2024 파리 올림픽 메달 대시보드</h1>
    <form className='input-form' onSubmit={addCountry}>

      <div className='input-field'>
      <label htmlFor='country'>국가명</label>
      <input className='input-chang' id='country'
      type='text'
      placeholder='국가 입력'
      onChange={(e)=>{
       setCountryInput(e.target.value);
      }}
      required
      />
      </div>
  
      <div className='input-field'>
      <label htmlFor='gold'>금메달</label>
      <input className='input-chang' id='gold'
      type='number'
      placeholder='0'
      onChange={(e)=>{
        setGoldInput(e.target.value);
      }}
      />
      </div>

      <div className='input-field'>
      <label htmlFor='silver'>은메달</label>
      <input className='input-chang' id='silver'
      type='number'
      placeholder='0'
      onChange={(e)=>{
        setSilverInput(e.target.value);
      }}
      />
      </div>

      <div className='input-field'>
      <label htmlFor='bronze'>동메달</label>
      <input className='input-chang' id='bronze'
      type='number'
      placeholder='0'
      onChange={(e)=>{
        setBronzeInput(e.target.value);
      }}
      />
      </div>

      <div className='button-group'>
        <button type='submit'>추가하기</button>
        <button onClick={updateCountries}>업데이트</button>
      </div>
    </form>

    <table className='table'>
  <thead className='thead'>
    <tr className='tr-top'>
         <td>국가명</td>
         <td>금메달</td>
         <td>은메달</td>
         <td>동메달</td>
         <td>액션</td>
     </tr>
  </thead>

  <tbody className='tbody'>
{countries.map((country)=>{
    return(
        <tr key={country.name}>
          <td>{country.name}</td>
          <td>{country.gold}</td>
          <td>{country.silver}</td>
          <td>{country.bronze}</td>
          <td type='button' className='delete-btn'
          onClick={() => deleteCountrey(country.name)}
          >삭제</td>
        </tr>
    )
})}
    </tbody>
  </table>


</div>

  )
}

export default App
