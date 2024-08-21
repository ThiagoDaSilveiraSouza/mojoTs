import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

const defaultHeaderStatus = {
  isHidden: false,
};

type HeaderStatusContextProps = {
  status: typeof defaultHeaderStatus;
  setStatus: Dispatch<SetStateAction<typeof defaultHeaderStatus>>;
};

export const HeaderStatusContext = createContext<HeaderStatusContextProps>({
  status: defaultHeaderStatus,
  setStatus: () => {},
});

type HeaderStatusProviderProps = {
  children?: ReactNode;
};

export const HeaderStatusProvider = ({
  children,
}: HeaderStatusProviderProps) => {
  const [status, setStatus] = useState(defaultHeaderStatus);

  return (
    <HeaderStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </HeaderStatusContext.Provider>
  );
};

export const UseHeaderStatus = () => {
  const { status: headerStatus, setStatus: setHeaderStatus } =
    useContext(HeaderStatusContext);

  const updateStatusProps = useCallback(
    <T extends keyof typeof headerStatus>(
      propName: T,
      value: (typeof headerStatus)[T]
    ) => {
      setHeaderStatus((prevState) => {
        return { ...prevState, [propName]: value };
      });
    },
    [setHeaderStatus]
  );

  return { headerStatus, updateStatusProps };
};
