import { SectionList } from "react-native";
import { Score } from "../components/Score";
import { ScoreHeader } from "../components/ScoreHeader";
import { useQuery } from "@tanstack/react-query";
import { getServerScore } from "../api";
import { flatArrayToSectionListArray } from "../helpers";

export const ServerScoreScreen = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["score"],
    queryFn: getServerScore,
  });
  if (!data) {
    return null;
  }
  return (
    <SectionList
      sections={flatArrayToSectionListArray(data)}
      keyExtractor={(item, index) => `${index}-${item.date}`}
      renderItem={({ item }) => <Score score={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ScoreHeader title={title} />
      )}
    />
  );
};
