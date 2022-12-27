import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Patrick', text: 'Today is Boxing Day!'},
    {id: 'q2', author: 'Haopu', text: 'Chicken livers are delicious!'}
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if(!quote) {
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>

    );
};

export default QuoteDetail;