import { XMarkIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { useRef } from "react";

interface ModalProps {
  width: string[];
  children: React.ReactNode;
  active: boolean;
  title?: string;
  contentStyle?: string;
  containerStyle?: string;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
  width,
  children,
  active,
  title,
  onCancel,
  contentStyle,
  containerStyle
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCancel(); // Call onCancel function if the click is outside
    }
  };
  return (
    <div
      onClick={handleOuterClick}
      className={cn(
        "fixed top-0 right-0 bottom-0 left-0 bg-black min-w-[100vw] h-[100vh] z-[1000000] min-h-[100vh] bg-opacity-50",
        { hidden: !active, "flex items-center justify-center": !containerStyle, containerStyle:containerStyle }
      )}
    >
      <div
        ref={modalRef}
        className={contentStyle ? contentStyle : `${width.join(
          " "
        )} bg-white p-[35px] rounded-[20px] min-h-[250px] z-[1000000] h-auto shadow-lg`}
      >
        {title ? (
          <div>
            <div className="w-full flex justify-between items-center mb-4">
              <p className="font-medium text-xl">{title}</p>
              <XMarkIcon
                className="w-4 h-4 cursor-pointer stroke-current stroke-2"
                onClick={onCancel}
              />
            </div>
            <div className="h-[1px] w-full bg-grayU mb-6" />
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default Modal;
