import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  var [types, setTypes] = useState([
    {
      name: "The Psychology of Self Motivation By Scott Geller",
      link: "https://youtu.be/7sxpKhIbr0E",
      rating: "3/5"
    },
    {
      name: "How to get your brain to focus by Chris Bailey",
      link: "https://youtu.be/Hu4Yvq-g7_Y",
      rating: "4/5"
    },
    {
      name: "How to motivate yourself by Tali Sharot",
      link: "https://youtu.be/xp0O2vi8DX4",
      rating: "3/5"
    }
  ]);
  function clickHand(lm) {
    if (lm === "Motivational") {
      console.log("Clicked on motivation");

      types = [
        {
          name: "The Psychology of Self Motivation By Scott Geller",
          link: "https://youtu.be/7sxpKhIbr0E",
          rating: "3/5"
        },
        {
          name: "How to get your brain to focus by Chris Bailey",
          link: "https://youtu.be/Hu4Yvq-g7_Y",
          rating: "4/5"
        },
        {
          name: "How to motivate yourself by Tali Sharot",
          link: "https://youtu.be/xp0O2vi8DX4",
          rating: "3/5"
        }
      ];
      setTypes(types);
    }
    if (lm === "Insightful") {
      console.log("Clicked on insightful");
      types = [
        {
          name: "Inside the mind of a procrastinator by Tim Urban",
          link: "https://youtu.be/arj7oStGLkU",
          rating: "3/5"
        },
        {
          name: "Your personality and your brain bt Scott Schwefe",
          link: "https://youtu.be/8pq_tCgDkT4",
          rating: "4/5"
        },
        {
          name: "The right brain vs the left",
          link: "https://youtu.be/PEzzZ__ccgQ",
          rating: "2/5"
        }
      ];
      setTypes(types);
    }
    if (lm === "Business") {
      console.log("Clicked on business ");

      types = [
        {
          name: "Power of an Entrepreneurial Mindset by Bill Roche",
          link: "https://youtu.be/Ihs4VFZWwn4",
          rating: "3/5"
        },
        {
          name: "How AI could Empower any business by Andrew Ng",
          link: "https://youtu.be/reUZRyXxUs4",
          rating: "4/5"
        },
        {
          name: "How to become a millionaire in 3years by Daniel Ally",
          link: "https://youtu.be/jvBaRf9LHDs",
          rating: "2/5"
        }
      ];
      setTypes(types);
    }
  }

  return (
    <div className="App">
      <h1>
        <span>🧸</span>Ted Talks <span>🗣️</span>
      </h1>

      <hr></hr>
      <p>Following are some of the Ted Talks I've Found Interesting </p>
      <ul className="list_nonbullet">
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Motivational")}>
            {" "}
            Motivational{" "}
          </button>{" "}
        </li>
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Insightful")}>
            {" "}
            Insightful{" "}
          </button>{" "}
        </li>
        <li className="list_item_inline">
          {" "}
          <button onClick={() => clickHand("Business")}> Business </button>{" "}
        </li>
      </ul>
      <hr></hr>

      <div>
        {types.map(function (er) {
          return (
            <ul className="list_nonbullet">
              <li className="addSpace">
                <div className="listitem">{er.name}</div>
                <div>
                  <strong> Rating: </strong> {er.rating}{" "}
                </div>
                <div>
                  {" "}
                  <strong> Link:</strong> <a href={er.link}> Click Here </a>{" "}
                </div>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="footer">
        <h4>Welcome To Ted Talks</h4>
        <p>
          Welcome, here are some of the ted talks I found interesting , ranging
          from Motivational to insightful.
        </p>
      </div>
    </div>
  );
}
