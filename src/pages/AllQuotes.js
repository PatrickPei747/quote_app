import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Patrick', text: 'Today is Boxing Day!'},
    {id: 'q2', author: 'Haopu', text: 'Chicken livers are delicious!'}
];

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};

export default AllQuotes;