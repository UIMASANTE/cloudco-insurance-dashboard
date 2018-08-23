import React from 'react';
import { Circle } from 'rc-progress';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import WatsonLoader from 'components/WatsonLoader';
import { palette } from 'styles/muiTheme';
import classes from './ToneBox.scss';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute', // Safari Fix
  },
  header: {
    paddingBottom: 0,
  },
};

const graphColor = {
   "Anger":1,
   "Joy":2,
   "Sadness":3,
   "Fear":4,
   "Tentative":5,
   "Analytical":6,
   "Confident":7
};

const tone_nameFR = {
   "Anger":"Colère",
   "Joy":"Joie",
   "Sadness":"Tristesse",
   "Fear":"Crainte",
   "Tentative":"Surprise",
   "Analytical":"Analytique",
   "Confident":"Sur de soi"
};

const ToneBox = ({ toneResult }) => {
  let content;
  if (!toneResult) {
    content = (<WatsonLoader />);
  }
  else if (toneResult.length === 0) {
    content = (<div />);
  }
  else {
    content = (<div className={classes.graphsContainer}>
      {toneResult.map((emotion, i) =>
        <div key={i} className={classes.sentiment}>
          <div className={classes.label}>{tone_nameFR[emotion.tone_name]}</div>
          <div className={classes.graphWrapper}>
            <div className={classes.percentage}>
              <div>{(emotion.score * 100).toFixed()}%</div>
            </div>
            <Circle
              className={classes.graph}
              percent={(emotion.score * 100)}
              strokeWidth="12"
              trailWidth="12"
              strokeColor={palette[`graph${graphColor[emotion.tone_name]}Color`]}
              trailColor={palette.accent1Color}
              strokeLinecap="square"
            />
          </div>
        </div>
      )}
    </div>);
  }
  return (<Card containerStyle={styles.container} className={classes.container}>
    <CardHeader style={styles.header} title="TOUS SENTIMENTS" />
    {content}
  </Card>);
};

ToneBox.propTypes = {
  toneResult: React.PropTypes.arrayOf(React.PropTypes.shape({
    tone_name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  })).isRequired,
};

export default ToneBox;
