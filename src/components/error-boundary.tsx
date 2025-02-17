import { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="h-svh w-svw flex flex-col justify-center items-center gap-4">
            <h1 className="text-2x text-center w-fit">Something went wrong</h1>
            <a
              href="#"
              onClick={() => window.location.reload()}
              className="px-6 py-4 rounded-xl bg-orange-100 text-orange-700 font-semibold w-fit"
            >
              reload
            </a>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
