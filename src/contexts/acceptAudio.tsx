import { Context, createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useMemo, useState } from 'react';

type AcceptAudioContextType = {
  acceptAudio: boolean;
  setAcceptAudio: (acceptAudio: boolean) => void;
};

export const AcceptAudioContext: Context<AcceptAudioContextType> = createContext({} as AcceptAudioContextType);

type Props = {
  children: ReactNode;
};

export const AcceptAudioProvider = ({ children }: Props): ReactElement => {
  const [acceptAudio, setAcceptAudio] = useState<boolean>(true);

  const value: {
    acceptAudio: boolean;
    setAcceptAudio: Dispatch<SetStateAction<boolean>>;
  } = useMemo(() => ({ acceptAudio, setAcceptAudio }), [acceptAudio]);

  return <AcceptAudioContext.Provider value={value}>{children}</AcceptAudioContext.Provider>;
};
