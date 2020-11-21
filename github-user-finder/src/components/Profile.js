import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const API = "https://api.github.com/";

export default function Profile() {
  const params = useParams();
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const fetchUser = (username) => {
    let url = `${API}users/${username}`;

    axios
      .get(url)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(false);
      });
  };

  const fetchRepo = (username) => {
    let url = `${API}users/${username}/repos`;
    axios
      .get(url)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
        setUser(false);
      });
  };

  useEffect(() => {
    fetchUser(params.username);
    fetchRepo(params.username);
  }, [params]);

  if (user) {
    let hire;

    let repoList = repos.map(function (repo) {
      return (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      );
    });

    if (user.message === "Not Found")
      return (
        <div className="notfound">
          <h2>Oops !!!</h2>
          <p>
            The Component Couldn't Find The You Were Looking For . Try Again{" "}
          </p>
        </div>
      );
    else {
      if (user.hireable) {
        hire = <div className="badge badge-success">Available for hire</div>;
      } else {
        hire = <div className="badge badge-danger">Unavailable for hire</div>;
      }
      return (
        <div>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ marginBottom: "20px" }}
          >
            Back to Index
          </Link>
          <div className="card w-75">
            <div className="card-body d-flex flex-row">
              <div>
                <img width="300" alt="User" src={user.avatar_url} />
              </div>
              <div>
                <h5 className="card-title">
                  <a href={user.html_url}>{user.name}</a>
                </h5>
                <small>
                  <cite title={user.location}>
                    {user.location}
                    <i className="glyphicon glyphicon-map-marker"></i>
                  </cite>
                </small>
                <p>
                  <i className="fas fa-envelope-open"></i>
                  <a href={"mailto:" + user.email}>{user.email}</a>
                  <br />
                  <i className="fas fa-globe"></i>
                  <a href={"http://" + user.blog}>{user.blog}</a>
                  <br />
                  <i className="fas fa-user"></i>
                  {user.bio}
                </p>
                <div
                  className="badge badge-primary"
                  style={{ marginRight: "10px" }}
                >
                  Followers: {user.followers}
                </div>
                <div
                  className="badge badge-warning"
                  style={{ marginRight: "10px" }}
                >
                  Following: {user.following}
                </div>
                {hire}
                <h4>Repository List ({user.public_repos}) </h4>
                <ul>{repoList}</ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <div>Please wait . . .</div>;
  }
}
