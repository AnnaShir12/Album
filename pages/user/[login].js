import Page from "../../components/album/Page";
import Link from "next/link";

function UserPage({ login }) {
  return (
    <div>
      <Page>
        <h1>Page #{login}</h1>
        <div></div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Page>

      <style jsx>{`
        h1 {
          text-align: center;
          height: 80vh;
        }
      `}</style>
    </div>
  );
}

UserPage.getInitialProps = function({ query }) {
  let { login } = query;
  console.log(query);

  return { login };
};

export default UserPage;
