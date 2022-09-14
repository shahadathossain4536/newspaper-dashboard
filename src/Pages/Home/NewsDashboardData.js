import React from "react";

const NewsDashboardData = ({ newsArticle }) => {
  const { author, urlToImage, url, source, title, description } = newsArticle;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={urlToImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{author}</div>
          </div>
        </div>
      </td>
      <td>
        <p>{title.slice(0, 50)}...</p>
      </td>
      <td>{source.name}</td>
      <th>
        <button className="btn  btn-xs hover:bg-red-600">
          <a href={url} target="_blank">
            details
          </a>
        </button>
      </th>
    </tr>
  );
};

export default NewsDashboardData;
