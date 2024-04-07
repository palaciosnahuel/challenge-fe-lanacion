'use client';
import { ArticleProvider } from "./ArticleContext";

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ArticleProvider>
      {children}
    </ArticleProvider>
  );
}