import { Fragment } from 'react';

import QuoteItem from './QuoteItem';
import styles from './QuoteList.module.css';

const QuoteList = (props) => {
  return (
    <Fragment>
      <div className={styles.sorting}></div>
      <ul className={styles.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
