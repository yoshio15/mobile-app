import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  MemoList: undefined;
  NewMemo: undefined;
}

export type MemoListProps = StackScreenProps<RootStackParamList, 'MemoList'>;
