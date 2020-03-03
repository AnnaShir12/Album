import Page from "../components/album/Page";
import fetch from "isomorphic-unfetch";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

function Home({ cards }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  // const { query } = router;
  const handleChange = e => {
    const changeValue = e.target.value;
    setSearchValue(changeValue);
  };
  const handleClick = e => {
    e.preventDefault();
    router.push(`/?q=${searchValue}`);
    // console.log(searchValue);
  };
  // console.log(cards);
  return (
    <Page>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <FormControl
              onChange={handleChange}
              value={searchValue}
              aria-describedby="basic-addon1"
            />
            <Button onClick={handleClick} variant="outline-secondary">
              Поиск
            </Button>
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
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">{card.login}</strong>
                  <Link href="/user/[login]" as={`/user/${card.login}`}>
                    <a>Follow</a>
                  </Link>
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
  const { q } = context.query;
  let cards = [];

  try {
    if (q) {
      const res = await fetch(`https://api.github.com/search/users?q=${q}`);
      if (res.status === 200) {
        const json = await res.json();
        cards = json.items;
        console.log(cards);
      }
    }
  } catch (error) {
    console.log("error =>", error);
  }

  return { cards };
};

export default Home;
