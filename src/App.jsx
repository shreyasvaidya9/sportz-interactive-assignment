import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import SearchForm from "./components/SearchForm";
import PlayersList from "./components/PlayersList";
import PlayersSkeleton from "./components/UI/PlayersSkeleton";
import Error from "./components/UI/Error";

import { removeStringAccents } from "./utils/common";

const url = import.meta.env.VITE_API_URL;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playersData, setPlayersData] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch the players data and store the values in the playersData and filteredPlayers state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const { playerList } = data;
        const sortedPlayers = playerList.sort((a, b) =>
          parseFloat(a.Value) < parseFloat(b.value) ? 1 : -1
        );
        setPlayersData(sortedPlayers);
        setFilteredPlayers(sortedPlayers);
        setError(null);
      } catch (error) {
        setError("Something Went Wrong");
        setPlayersData([]);
        setFilteredPlayers([]);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Update the filteredPlayers state when a player name or team is typed in the search field
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPlayers(playersData);
    } else {
      const filteredData = playersData.filter((item) => {
        const { PFName, TName } = item;
        const searchItem = searchTerm.toLowerCase();

        // Removing any accents present in the string. Eg: Alcántara - Alcantara
        const playerName = removeStringAccents(PFName.toLowerCase());
        const teamName = removeStringAccents(TName.toLowerCase());

        return playerName.includes(searchItem) || teamName.includes(searchItem);
      });
      setFilteredPlayers(filteredData);
    }
  }, [searchTerm]);

  const updateSearchTerm = (value) => setSearchTerm(value);

  return (
    <div className="App">
      <Container>
        {loading ? (
          <PlayersSkeleton />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <SearchForm
              searchTerm={searchTerm}
              updateSearchTerm={updateSearchTerm}
            />
            <PlayersList players={filteredPlayers} />
          </>
        )}
      </Container>
    </div>
  );
};

export default App;
