import Page from "../components/album/Page";
import fetch from "isomorphic-unfetch";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function Home({ cards }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  // const { query } = router;
  const handleClick = e => {
    e.preventDefault();
    router.push("/?q=d");
  };
  // console.log(cards);
  return (
    <Page>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button onClick={handleClick} variant="outline-secondary">
              Button
            </Button>
            <FormControl
              onChange={item => console.log(item)}
              value={searchValue}
              aria-describedby="basic-addon1"
            />
          </InputGroup.Prepend>
        </InputGroup>
        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>

        {cards.map((card, index) => (
          <div key={card.id}>
            <div className="media text-muted pt-3">
              <img
                className="bd-placeholder-img mr-2 rounded"
                src={card.avatar_url}
              />
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">{card.login}</strong>
                  <a href="#">Follow</a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <small className="d-block text-right mt-3">
          <a href="#">All suggestions</a>
        </small>
      </div>
      <style jsx>{`
        img {
          width: 32px;
          height: 32px;
        }
      `}</style>
    </Page>
  );
}

Home.getInitialProps = async function(context) {
  const res = await fetch(
    `https://api.github.com/search/users?q=${context.query.q}`
  );
  const json = await res.json();
  console.log(context);
  return { cards: json.items };
};

export default Home;
