import React from 'react';

// Functional Components
import { Cards, Chart, CountryPicker } from './components';

// App Styling
import styles from './App.module.css';

// API
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    render() {
        // destructure the data object from the state
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} /> 
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;