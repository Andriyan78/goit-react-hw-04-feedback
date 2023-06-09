
import propTypes from 'prop-types';
import { Title, Item, Span, Div, List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Div>
      <Title>Statistics</Title>
      <List>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>
          <Span>Total: </Span>
          {total}
        </Item>
        <Item>
          <Span>Positive feedback: </Span>
          {positivePercentage}%
        </Item>
      </List>
    </Div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.string.isRequired,
};