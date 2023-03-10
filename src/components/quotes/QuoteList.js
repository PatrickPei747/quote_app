import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import styles from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get('sort') === 'asc';

  const sortedQuote = sortQuotes(props.quotes, isSortAscending);

  const changeSortingHandler = () => {
    history.push(`${location.pathname}?sort=${(isSortAscending ? 'dec' : 'asc')}`);
  };

  return (
    <Fragment>
      <div className={styles.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuote.map((quote) => (
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
