export type FriendFlatListPropsTypes = {
  data: Array<{ uri: string; name: string; introduction: string }>;
  isOpened: boolean;
  onArrowPress: () => void;
};

export type ListHeaderComponentPropsTypes = {
  onArrowPress: () => void;
  isOpened: boolean;
};
