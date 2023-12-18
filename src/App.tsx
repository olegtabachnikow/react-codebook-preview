import { FC } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { store } from './state/store';
import { Provider } from 'react-redux';
import CellList from './components/CellList/CellList';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBlock: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>This is preview of Codebook Project</h1>
        <h2>All features available with full version of package</h2>
        <a
          target='_blank'
          href='https://www.npmjs.com/package/react-codebook?activeTab=readme'
        >
          Link to package
        </a>
      </div>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

export default App;
