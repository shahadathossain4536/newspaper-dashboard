import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import NewsDashboardData from "./NewsDashboardData";

const NewsDashboard = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const apiKey = "edb9933cbcd3418dbb48d793b683ebe0";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=edb9933cbcd3418dbb48d793b683ebe0`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewsArticles(data.articles));
  }, []);

  console.log("dsdddddss", newsArticles);
  return (
    <div className="my-20">
      <h2 className="text-center text-5xl py-10">News DeashBoard</h2>

      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Source</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {newsArticles.map((newsArticle, index) => (
              <NewsDashboardData
                index={index}
                newsArticle={newsArticle}
              ></NewsDashboardData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsDashboard;
