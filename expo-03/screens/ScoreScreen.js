import { SectionList } from "react-native";
import { useStore } from "../zustand";
import { Score } from "../components/Score";
import { ScoreHeader } from "../components/ScoreHeader";

export const ScoreScreen = () => {
  const scores = useStore((state) => state.scores);

  return (
    <SectionList
      sections={scores}
      keyExtractor={(item, index) => `${index}-${item.date}`}
      renderItem={({ item }) => <Score score={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ScoreHeader title={title} />
      )}
    />
  );
};
