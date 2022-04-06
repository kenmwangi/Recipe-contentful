import Image from "next/image";
import Link from "next/link";
import React from "react";

function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <section className="card">
      <div className="featured">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.width}
          alt="Thumbnail"
        />
      </div>
      <article className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>
            <a>Cook This</a>
          </Link>
        </div>
      </article>

      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 1rem;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          background-color: #1872e6;
          text-decoration: none;
          padding: 1rem 1.5rem;
        }
      `}</style>
    </section>
  );
}

export default RecipeCard;
