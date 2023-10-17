import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color: string;
  if (score > 60) {
    if (score > 75) {
      color = "green";
    } else {
      color = "yellow";
    }
  } else {
    color = "red";
  }

  if (score)
    return (
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={2}
        borderRadius={3}
      >
        {score}
      </Badge>
    );
};

export default CriticScore;
