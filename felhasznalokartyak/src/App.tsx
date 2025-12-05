import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";

type UserLikes = {
  id: number;
  likes: number;
};

function App() {
  const [userLikes, setLikes] = useState<
    UserLikes[]
  >(() => {
    const stored =
      window.localStorage.getItem("userLikes");
    if (stored !== null) {
      return JSON.parse(stored) as UserLikes[];
    }

    const values = Array.from({
      length: 10,
    }).map((_, i) => {
      return { id: i + 1, likes: 0 };
    });

    window.localStorage.setItem(
      "userLikes",
      JSON.stringify(values),
    );
    return values;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "userLikes",
      JSON.stringify(userLikes),
    );
  }, [userLikes]);

  // create 10 user cards in a grid and add like buttons to them
  // likes will be tied to an id from 1-10 and stored in localstorage
  // the localstorage object will be of type UserLikes[]
  // this is to ensure the likes count stay the same since all users are random
  return (
    <>
      <div className="grid">
        {/*im sorry randomuser and restcountries for ddos bombing your services 30 times each reload*/}

        {[...Array(10)].map((_, i) => (
          <div key={i} className="card">
            <UserCard id={i + 1} />
            <button
              className="like-button"
              onClick={() => {
                const existingLike =
                  userLikes.find(
                    (like) => like.id === i + 1,
                  );
                if (existingLike) {
                  setLikes(
                    userLikes.map((like) =>
                      like.id === i + 1
                        ? {
                            ...like,
                            likes: like.likes + 1,
                          }
                        : like,
                    ),
                  );
                } else {
                  setLikes([
                    ...userLikes,
                    { id: i + 1, likes: 1 },
                  ]);
                }
              }}
            >
              Like (
              {userLikes.find(
                (like) => like.id === i + 1,
              )?.likes ?? 0}
              )
            </button>
            <button
              className="dislike-button"
              onClick={() => {
                const existingLike =
                  userLikes.find(
                    (like) => like.id === i + 1,
                  );
                if (
                  existingLike &&
                  existingLike.likes > 0
                ) {
                  setLikes(
                    userLikes.map((like) =>
                      like.id === i + 1
                        ? {
                            ...like,
                            likes: like.likes - 1,
                          }
                        : like,
                    ),
                  );
                }
              }}
            >
              Dislike
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
