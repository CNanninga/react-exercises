import ReactDOM from 'react-dom/client';
import Clock from './03_clock/index.js'

// ========================================

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
function tick() {
    root.render(<Clock/>);
}
setInterval(tick, 1000);
