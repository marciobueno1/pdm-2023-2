import { SectionList } from "react-native";
import { useStore } from "../zustand";
import { Score } from "../components/Score";
import { ScoreHeader } from "../components/ScoreHeader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ServerScoreScreen = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["score"],
    queryFn: () => axios.get("url").then((res) => res.data),
  });
  return (
    <SectionList
      sections={scores}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => <Score score={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ScoreHeader title={title} />
      )}
    />
  );
};
