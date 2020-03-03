import { catalog } from "../helpers/data";
import Link from "next/link";

function CatalogPage() {
  return (
    <div>
      <ul>
        {catalog.items.map((item, index) => (
          <li key={index}>
            <Link href={`/catalog/${item.slug}`}>
              <a>{item.slug}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogPage;
