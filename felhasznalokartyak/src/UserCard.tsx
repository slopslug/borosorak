import { useState, useEffect } from "react";
import "./App.css";

export type User = {
  id: number;
  name: string;
  email: string;
  image: URL;
  nat: string;
};

type Params = {
  id: number;
};

type Country = {
  name: string;
  emoji: string;
};

function unicodeToChar(uni: string) {
  return uni.replace(/\\u[\dA-F]{4}/gi, (match) =>
    String.fromCharCode(
      parseInt(match.replace(/\\u/g, ""), 16),
    ),
  );
}

function UserCard({ id }: Params) {
  const [user, setUser] = useState<
    User | undefined
  >();

  useEffect(() => {
    async function getCountryNameFromCode(
      id: string,
    ): Promise<Country> {
      try {
        const req = await fetch(
          `https://restcountries.com/v3.1/alpha/${id}`,
        );
        let countrydata = await req.json();
        countrydata = countrydata[0];
        return {
          name: countrydata.name.common,
          emoji: unicodeToChar(countrydata.flag),
        };
      } catch (e) {
        throw new Error(
          `failed to fetch countrycode ${id}: ` +
            e,
        );
      }
    }
    async function getUser(): Promise<User> {
      try {
        const req = await fetch(
          "https://randomuser.me/api",
          {
            headers: {
              Accept: "application/json",
            },
          },
        );

        let userdata = await req.json();
        userdata = userdata.results[0];

        const countryinfo =
          await getCountryNameFromCode(
            userdata.nat,
          ).catch((e) => {
            return {
              name: e + " landia",
              emoji: "🏳️",
            };
          });

        return {
          id: id,
          name:
            userdata.name.first +
            " " +
            userdata.name.last,
          email: userdata.email,
          image: userdata.picture.large,
          nat: `${countryinfo.name} ${countryinfo.emoji}`,
        };
      } catch (e) {
        throw new Error(
          "failed to get user: " + e,
        );
      }
    }

    const data = getUser();
    data.then((d) => setUser(d)).catch((e) => e);
  }, [id]);

  return (
    <div>
      {user ? (
        <div className="usercard">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.nat}</p>
          <img
            src={user.image.toString()}
            alt="User Avatar"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserCard;
