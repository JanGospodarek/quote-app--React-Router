import React from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const dummyQuotes = [
  { id: "q1", author: "MAX", text: "hejo" },
  { id: "q2", author: "ALA", text: "hejka!" },
];
function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();
  const quote = dummyQuotes.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </React.Fragment>
  );
}
export default QuoteDetail;
