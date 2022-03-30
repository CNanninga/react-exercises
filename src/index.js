import ReactDOM from 'react-dom/client';
import Greetings from './02_greeting/index.js'

// ========================================

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<Greetings number={1} />);
