import mainPicture from './assets/mainmeme.jpg'
import './style.css'
const Page = () => {
return(
    <>
        <header className='header'>
            <h1 className='headertitle'>DEUTSCH WORT FABRIK
 </h1>
        </header>
        <main className='main'>
            <img className='mainpic' src={mainPicture}/>
        </main>
        <div className="search">
            <input className='searchbar' type="text" placeholder="단어를 검색하세요" />
            <button className='searchbtn'>검색</button>
        </div>
        <div className="result">

        </div>
    </>
  );
}
export default Page;