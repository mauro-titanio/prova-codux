import { useState } from 'react';
import { CustomButton } from './components/button/button';
import App_module from './App.module.scss';

function App() {
    const [count, setCount] = useState<number>(0);

    const handleCount = () => setCount(count + 1);

    return <div className={App_module.container}>
        <button className={App_module.button}>Button</button>
        <CustomButton>My button</CustomButton>
    </div>;
}

export default App;
