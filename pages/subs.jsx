import React, { useState } from "react";
import { useQuery } from "react-query";
import NewSubRedditForm from "../components/forms/newSubredditForm";
import Button from "../components/inputs/button";
import SubRedditsLists from "../components/itemsList/SubRedditsList";
import PlusIcon from "../icons/PlusIcons";
import subRedditAPI from "../utils/api/subreddit";
import { queryStores } from "../utils/constants";

const Home = () => {
  const query = useQuery(queryStores.subreddits, () => subRedditAPI.getAll());
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className="p-5">
      <section id="home-controls" className="flex flex-row justify-end mt-2">
        <Button
          tip="Create a Sub Reddit"
          className="rounded border border-black p-2"
          onClick={() => setDisplayForm(!displayForm)}
          {...{
            tooltip: {
              id: "createSubRedditTip",
              place: "top",
              type: "info",
              effect: "float",
            },
          }}
        >
          <PlusIcon />
        </Button>
      </section>
      {displayForm && (
        <section id="home-form" className="flex flex-column mt-2">
          <NewSubRedditForm />
        </section>
      )}
      <section id="home-list" className="mt-2">
        <SubRedditsLists />
      </section>
    </div>
  );
};

export default Home;
