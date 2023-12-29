import { configureStore } from '@reduxjs/toolkit';
import cellsSlice from './cells-slice/cells-slice';
import bundleSlice from './bundle-slice/bundle-slice';
import { insertCell } from './cells-slice/cells-slice';

const reducer = {
  cells: cellsSlice,
  bundles: bundleSlice,
};

export const store = configureStore({ reducer: reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(
  insertCell({
    id: 'abc',
    type: 'code',
    content: `
import ReactDOM from 'react-dom/client';
const App = () => {
  return (
    <div
      style={{
        color: '#fff',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 16px)',
        fontSize: 50,
      }}
    >
      Hello there!
    </div>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
`,
  })
);
store.dispatch(
  insertCell({
    id: 'def',
    type: 'markdown',
    content: '# This is preview of Codebook Project',
  })
);
