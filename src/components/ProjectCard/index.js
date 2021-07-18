import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { imageUrl, title, description, githubUrl } = props;

  return (
    <div id="container">
      <div class="product-details">
        <h1>{title}</h1>

        <p class="information">{description}</p>
        <i class="fa fa-github-square"></i>
        <div class="control">
          <button class="btn">
            <span class="price">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span class="shopping-cart">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </span>
            <span class="buy">Github Repo</span>
          </button>
        </div>
      </div>

      <div class="product-image">
        <img src={imageUrl} alt={title} />

        <div class="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Height : </strong>5 Ft{" "}
            </li>
            <li>
              <strong>Shade : </strong>Olive green
            </li>
            <li>
              <strong>Decoration: </strong>balls and bells
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
