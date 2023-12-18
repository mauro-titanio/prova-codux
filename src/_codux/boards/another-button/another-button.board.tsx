import { createBoard } from '@wixc3/react-board';
import { AnotherButton } from '../../../components/another-button/another-button';

export default createBoard({
    name: 'AnotherButton',
    Board: () => <AnotherButton />,
    isSnippet: true,
});
