import { useState } from 'react';
import { CustomButton } from './components/button/button';
import App_module from './App.module.scss';
import { AnotherButton } from './components/another-button/another-button';


function App() {
    const [count, setCount] = useState<number>(0);

    const handleCount = () => setCount(count + 1);

    return <div className={App_module.container}>
        <button className={App_module.button} onClick={handleCount}>Count: {count}</button>
        <CustomButton>My button</CustomButton>
        <AnotherButton />
    </div>;
}

export default App;
