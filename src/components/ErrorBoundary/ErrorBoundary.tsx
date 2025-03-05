import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    error: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = {
        error: false
    };

    static getDerivedStateFromError(_: Error): State {
        return { error: true };
      }
    
      componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
      }
    
      render(): ReactNode {
        if (this.state.error) {
          return this.props.fallback ?? <ErrorMessage />;
        }
    
        return this.props.children;
      }
}