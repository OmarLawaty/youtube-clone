import { Provider } from './ui/provider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => <Provider>{children}</Provider>;
