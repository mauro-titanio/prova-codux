import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1560,
        windowWidth: 414,
        canvasHeight: 895,
        windowHeight: 896
    }
});
