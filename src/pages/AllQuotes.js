import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";
const dummyQuotes = [
  { id: "q1", author: "MAX", text: "hejo" },
  { id: "q2", author: "ALA", text: "hejka!" },
];
function AllQuotes() {
  return <QuoteList quotes={dummyQuotes}></QuoteList>;
}
export default AllQuotes;
