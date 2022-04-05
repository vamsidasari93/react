import * as React from "react";
import "./style.scss";

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const banner = event.target.elements.banner.value;
    const name = event.target.elements.name.value;
    const post = {
      id: +new Date(),
      name: name,
      banner: banner,
    };

    if (banner && name) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/");
    }
  };

  render() {
    return (
      <div>
        <h1> Add Movies </h1>
        <div className="add-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="BannerLink" name="banner" />
            <br />
            <input type="text" placeholder="Movie Name" name="name" />
            <br />
            <button>post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMovie;
