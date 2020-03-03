import Page from "../../components/album/Page";
import Link from "next/link";

function SlugPage({ slug }) {
  return (
    <div>
      <Page>
        <h1>Page #{slug}</h1>
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

SlugPage.getInitialProps = function({ query }) {
  let { slug } = query;
  return { slug };
};

export default SlugPage;

// export default TestPage;
// import { catalog } from "../../helpers/data";

// function CatalogItemPage({ item }) {
//   return (
//     <div>
//       <h1>{item && item.title}</h1>
//     </div>
//   );
// }

// CatalogItemPage.getInitialProps = async ({ query, res, err }) => {
//   const { slug } = query;

//   const item = catalog.items.find(element => {
//     return element.slug === slug;
//   });

//   return { item };
// };

// export default CatalogItemPage;

// import { useRouter } from "next/router";

// function TestPage() {
//   const router = useRouter();

//   return (
//     <div>
//       <h1>{router.query.slug}</h1>
//       <h1>{router.pathname}</h1>
//       Test
//     </div>
//   );
// }

// export default TestPage;
