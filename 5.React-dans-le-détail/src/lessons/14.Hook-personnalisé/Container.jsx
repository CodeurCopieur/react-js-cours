import useCallApi from "./hooks/useCallApi";
import spinner from "./spinner.svg";

export default function Container() {

  const { data, loading, error } = useCallApi();

  let content = null;
  if(loading && !error) content = <img src={spinner} alt="Loading" />
  else if(error) content = <p>Error: une erreur est survenue</p>
  else if(data) content = <img src={data[0].url} alt="Photo de Chat" />
  
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {content}
    </div>
  )
}
