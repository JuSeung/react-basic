import logo from './logo.svg';
import './App.css';

function App() {
    const name = '엘리';
    const list = ['우유', '테스트', '바나나'];
    return (
        <>
            <h1 className='orange'>{`Hello!! ${name}`}</h1>
            <ul>
                {
                    list.map((item, index) => (
                    <li>{item}</li>
                ))
                }
            </ul>
            <img
                style={{width:'100px', height:'100px'}}
                src={logo}
                alt="logo" />
        </>
    );
}

export default App;
