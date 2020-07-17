import React from 'react';

// Functional Components
import { Cards, Chart, CountryPicker } from './components';

// App Styling
import styles from './App.module.css';

class App extends React.Component {
    render() {

        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;