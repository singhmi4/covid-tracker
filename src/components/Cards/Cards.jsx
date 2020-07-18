import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

// Card Styling
import styles from './Cards.module.css';

// Functional component
const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    const cardData = [
        {
            "title": "Infected",
            "dataStyle": styles.infected,
            "type": confirmed,
            "body": "Number of active cases of COVID-19"
        },
        {
            "title": "Recovered",
            "dataStyle": styles.recovered,
            "type": recovered,
            "body": "Number of recoveries from COVID-19"
        },
        {
            "title": "Deaths",
            "dataStyle": styles.deaths,
            "type": deaths,
            "body": "Number of deaths caused by COVID-19"
        },
    ]

    return(
        <div className={styles.container} >
             <Grid container spacing={3} justify="center" >
                {cardData.map(({ title, dataStyle, type, body }, i) => (
                    <Grid key={i} item component={Card} xs={12} md={3} className={cx(styles.card, dataStyle)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{title}</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={type.value} duration={2.5} separator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">{body}</Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards;