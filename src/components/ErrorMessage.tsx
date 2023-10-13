interface PropsErroMessage {
  children: React.ReactNode;
}

export const ErrorMessage = ({ children }: PropsErroMessage) => {
  return (
    <span className="text-sm leading-tight text-defaultRed flex pl-3 ">
      {children}
    </span>
  );
};
