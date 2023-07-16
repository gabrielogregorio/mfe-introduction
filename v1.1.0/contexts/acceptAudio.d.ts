import { Context, ReactElement, ReactNode } from 'react';
type AcceptAudioContextType = {
    acceptAudio: boolean;
    setAcceptAudio: (acceptAudio: boolean) => void;
};
export declare const AcceptAudioContext: Context<AcceptAudioContextType>;
type Props = {
    children: ReactNode;
};
export declare const AcceptAudioProvider: ({ children }: Props) => ReactElement;
export {};
