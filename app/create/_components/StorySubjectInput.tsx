import { Textarea } from "@nextui-org/input";

const StorySubjectInput = ({ userSelection }: any) => {
  return (
    <div>
      <label className="text-4xl font-bold text-primary">
        1. Subject of the story
      </label>
      <Textarea
        classNames={{ input: "resize-y min-h-[230px] text-2xl p-5" }}
        size="lg"
        placeholder="Write the subject of the story which you want to generate"
        className="mt-3 max-w-lg"
        onChange={(e) =>
          userSelection({
            fieldValue: e.target.value,
            fieldName: "storyselection",
          })
        }
      />
    </div>
  );
};

export default StorySubjectInput;
