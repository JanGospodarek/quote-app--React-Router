import React, { useEffect } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
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
