import React from 'react';

// Functional Components
import { Cards, Chart, CountryPicker } from './components';

// App Styling
import styles from './App.module.css';

// API
import { fetchData } from './api';

class App extends React.Component {

    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

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