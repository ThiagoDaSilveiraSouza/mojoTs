import { RefObject, useEffect, useRef } from "react";
import { UseHeaderStatus } from "../../context";

type ScrollStatusProps = {
  lastPosition: number;
};

type useScrollDirectionProps = {
  elementRef: RefObject<HTMLElement>;
};

export const useScrollDirection = ({ elementRef }: useScrollDirectionProps) => {
  const { headerStatus, updateStatusProps } = UseHeaderStatus();
  const scrollStatus = useRef<ScrollStatusProps>({
    lastPosition: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = elementRef?.current?.scrollTop;
      const { lastPosition } = scrollStatus.current;
      const heigthDelay = 10;

      if (!currentPosition) {
        return;
      }

      const isUp = currentPosition <= lastPosition;
      const isDown = currentPosition >= lastPosition + heigthDelay;

      if (isUp) {
        updateStatusProps("isHidden", false);
      } else if (isDown) {
        updateStatusProps("isHidden", true);
      }

      scrollStatus.current.lastPosition = currentPosition;
    };

    elementRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      elementRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, headerStatus, updateStatusProps]);

  return { headerStatus };
};

export default useScrollDirection;
