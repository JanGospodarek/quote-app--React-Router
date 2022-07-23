import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
function NewQuotes() {
  const history = useHistory();
  function addHandler(quoteData) {
    history.push("/quotes");
    console.log(quoteData);
  }
  return <QuoteForm onAddQuote={addHandler}></QuoteForm>;
}
export default NewQuotes;
