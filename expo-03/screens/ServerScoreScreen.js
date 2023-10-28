import { SectionList } from "react-native";
import { Score } from "../components/Score";
import { ScoreHeader } from "../components/ScoreHeader";
import { useQuery } from "@tanstack/react-query";
import { getScore } from "../api";
import { flatArrayToSectionListArray } from "../helpers";

export const ServerScoreScreen = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["score"],
    queryFn: getScore,
  });
  if (!data) {
    return null;
  }
  console.log("data", data);
  console.log(
    "flatArrayToSectionListArray(data)",
    flatArrayToSectionListArray(data)
  );
  return (
    <SectionList
      sections={flatArrayToSectionListArray(data)}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => <Score score={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ScoreHeader title={title} />
      )}
    />
  );
};
