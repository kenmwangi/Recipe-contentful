import Image from "next/image";

import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACESS_KEY,
});
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  return {
    props: { recipe: items[0] },
    revalidate: 1,
  };
}

function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />;
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  console.log(recipe);
  return (
    <div>
      <section className="banner">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt="Featured Image"
        />
        <h2>{title}</h2>

        <div className="info">
          <p>Take about {cookingTime} minutes to cook</p>
          <h3>Ingredients</h3>

          {ingredients.map((ingredient) => (
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>

        <div className="methods">
          <h3>Methods</h3>
          <div>{documentToReactComponents(method)}</div>
        </div>
      </section>

      <style jsx>
        {`
          h2,
          h3 {
            text-transform: uppercase;
          }
          .banner h2 {
            margin: 0;
            background: #fff;
            display: inline-block;
            padding: 20px;
            position: relative;
            top: -60px;
            left: -10px;
            transform: rotateZ(-1deg);
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          }
          .info p {
            margin: 0;
          }
          .info span::after {
            content: ",";
          }
          .info span:last-child::after {
            content: ".";
          }
        `}
      </style>
    </div>
  );
}

export default RecipeDetails;
